import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import { fetchSpec, updateStatus } from '../../Database/database';
import WithStatusClass from '../../hoc/WithStatusClass/WithStatusClass';
import statusTypes from '../../Constants/STATUS_TYPES';

import classes from './Specimen.module.css'
import AccessionNum from './AccessionNum/AccessionNum';
import SpecHistory from './SpecHistory/SpecHistory';

class Specimen extends React.Component {
    constructor(props) {
        super(props);
        this.getSpecQuery = this.getSpecQuery.bind(this);
    }

    componentDidMount() {
        this.getSpecQuery();
    }

    shouldComponentUpdate(nextProps) {
        if (!nextProps.location.search) return false;
        return true;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.getSpecQuery();
        }
    }

    getSpecQuery() {
        const newSpec = new URLSearchParams(this.props.location.search).get('spec');
        if (newSpec) {
            fetchSpec(newSpec);
        }
    }

    updateSpecWKS(worksheet, status, message) {
        updateStatus(this.props.spec.id, worksheet, status, message);
    }

    render() {
        let specDisplay = null;
        if (this.props.spec) {

            const worksheets = Object.keys(this.props.spec.worksheets).map(wks => (
                <tr key={wks}>
                    <td>
                        <span>{wks}</span>
                    </td>
                    <td>
                        <WithStatusClass key={wks} status={this.props.spec.worksheets[wks].status}>
                            <span>{this.props.spec.worksheets[wks].status}</span>
                        </WithStatusClass>
                    </td>
                    <td>
                        <button onClick={() => this.updateSpecWKS(wks, statusTypes.watch)}>Watch</button>
                        <button onClick={() => this.updateSpecWKS(wks, statusTypes.resolved)}>Resolve</button>
                    </td>
                </tr>
            ))
            specDisplay = (
                <Aux>
                    <AccessionNum specID={this.props.spec.id}></AccessionNum>
                    <br></br>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    Worksheet
                            </th>
                                <th>
                                    Status
                            </th>
                                <th>
                                    Notes
                            </th>
                            </tr>
                            {worksheets}
                        </tbody>
                    </table>
                    <div className={classes.HistoryContainer}>
                        <SpecHistory history={this.props.spec.history}></SpecHistory>
                    </div>
                </Aux>
            )
        }
        return (
            <div className={classes.Specimen}>
                {specDisplay}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const specProp = state.currentSpec && { ...state.currentSpec }
    return {
        spec: specProp
    }
}

export default withRouter(connect(mapStateToProps)(Specimen));
