import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from './../../../hoc/Auxilliary/Auxilliary';
import { fetchSpec, updateStatus } from '../../../Database/database';
import WithStatusClass from '../../../hoc/WithStatusClass/WithStatusClass';
import statusTypes from './../../../Constants/STATUS_TYPES';

import classes from './Specimen.module.css'
class Specimen extends React.Component {
    constructor(props) {
        super(props);
        this.selectSpecID = this.selectSpecID.bind(this);
    }

    componentDidMount() {
        const spec = new URLSearchParams(this.props.location.search).get('spec');
        if (spec) {
            fetchSpec(spec);
        }
    }

    updateSpecWKS(worksheet, status) {
        updateStatus(this.props.spec.id, worksheet, status, 'testing update spec WKS');
    }

    selectSpecID() {
        const range = document.createRange();
        range.selectNode(document.getElementById("specID"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }

    render() {
        let specDisplay = null;
        if (this.props.spec) {
            const events = Object.keys(this.props.spec.history).map(event => (
                <li key={event}>
                    <p>{this.props.spec.history[event].message}</p>
                    <span>{this.props.spec.history[event].date}</span>
                </li>
            ))

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
                    <div className={classes.Accession}>
                        <span className={classes.AccessionLabel}>Acc #</span>
                        <span id="specID" onClick={this.selectSpecID} className={classes.AccessionNum}>{this.props.spec.id}</span>
                        <i title="Copy to Clipboard" className={classes.CopyIcon + " far fa-copy"}></i>
                    </div>
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
                    <ul>
                        {events}
                    </ul>
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
