import React from 'react';
import { connect } from 'react-redux';

import Payload from './Payload/Payload';
import InputReader from './InputReader/InputReader';
import parseInput from './processInput/parseInput';
import filterNew from './processInput/filterNew';

import classes from './Uploader.module.css'

class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: {
                add: {},
                purge: {}
            },
        }
        this.addToPayload = this.addToPayload.bind(this);
        this.removeFromPayload = this.removeFromPayload.bind(this);
    }

    addToPayload(input) {
        event.preventDefault();
        let newPending = parseInput(input);
        let newPayload = null
        if (newPending) {
            newPayload = filterNew(this.props.currPending, newPending)
            this.setState({
                payload: newPayload,
            })
        }
    }

    removeFromPayload(wks, specID) {
        const newPending = {
            ...this.state.pending,
        };
        delete newPending[wks][specID];
        this.setState({
            ...this.state,
            pending: newPending
        })
    }

    render() {
        return (
            <div className={classes.Uploader}>
                <div className={classes.InputArea}>
                    <InputReader submitInput={this.addToPayload}></InputReader>
                </div>

                <div className={classes.ToBeUpdated}>
                    <Payload
                        removeSpec={this.removeFromPayload}
                        checkingPayload
                        payload={this.state.payload}></Payload>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const pending = {
        ...state.pending
    }
    for (let wks in state.pending) {
        pending[wks] = { ...state.pending[wks] }
    }
    return {
        currPending: pending
    }
}

export default connect(mapStateToProps)(Uploader);
