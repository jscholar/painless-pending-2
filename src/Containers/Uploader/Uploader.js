import React from 'react';

import Payload from './Payload/Payload';
import InputReader from './InputReader/InputReader';
import parseInput from './parseInput/parseInput';
import TxtImport from './InputReader/TxtImport';

import classes from './Uploader.module.css'

class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkingPayload: false,
            pending: {},
        }
        this.addToPayload = this.addToPayload.bind(this);
        this.removeFromPayload = this.removeFromPayload.bind(this);
    }

    addToPayload(input) {
        event.preventDefault();
        let newPending = parseInput(input);
        if (newPending) {
            this.setState({
                pending: newPending,
                checkingPayload: true
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
                    <h1>Detected new pending specimens?</h1>
                    {this.state.checkingPayload ?
                        <Payload removeSpec={this.removeFromPayload}
                            pending={this.state.pending}></Payload>
                        : null}
                </div>
            </div>
        )
    }
}

export default Uploader;
