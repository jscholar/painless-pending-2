import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import { fetchSpec, updateStatus, addEvent } from '../../Database/database';

import AccessionNum from './AccessionNum/AccessionNum';
import SpecEvents from './SpecEvents/SpecEvents';
import WorksheetTable from './WorksheetTable/WorksheetTable';

import classes from './Specimen.module.css'

class Specimen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
        this.getSpecQuery = this.getSpecQuery.bind(this);
        this.appendMessage = this.appendMessage.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.updateSpecWKS = this.updateSpecWKS.bind(this);
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

    handleMessageChange(event) {
        this.setState({
            message: event.target.value
        })
    }

    appendMessage() {
        addEvent(this.props.spec.id, this.state.message);
        this.setState({
            message: '',
        })
    }

    render() {
        let specDisplay = null;
        if (this.props.spec) {
            specDisplay = (
                <Aux>
                    <AccessionNum specID={this.props.spec.id}></AccessionNum>
                    <br></br>
                    <WorksheetTable 
                        updateSpecWKS={this.updateSpecWKS}
                        worksheets={this.props.spec.worksheets}>
                    </WorksheetTable>
                    <div className={classes.HistoryContainer}>
                        <SpecEvents 
                            messageText={this.state.message}
                            changeHandler={this.handleMessageChange} 
                            submitMessage={this.appendMessage} 
                            history={this.props.spec.history}>
                        </SpecEvents>
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
