import React from 'react';
import { connect } from 'react-redux';

import Payload from './Payload/Payload';
import InputReader from './InputReader/InputReader';
import Modal from './../../Components/UI/Modal/Modal';

import parseInput from './processInput/parseInput';
import filterNew from './processInput/filterNew';

import classes from './Uploader.module.css'
import { upload } from './../../Database/database';

class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkingPayload: false,
            confirming: false,
            payload: {
                add: {},
            },
        }
        this.addToPayload = this.addToPayload.bind(this);
        this.removeFromPayload = this.removeFromPayload.bind(this);
        this.clearPayload = this.clearPayload.bind(this);
        this.cancelSubmit = this.cancelUpload.bind(this);
        this.cancelUpload = this.cancelUpload.bind(this);
        this.confirmUpload = this.confirmUpload.bind(this);
    }

    addToPayload(input) {
        let newPending = parseInput(input);
        let newPayload = null
        if (newPending) {
            newPayload = filterNew(this.props.currPending, newPending)
            this.setState({
                checkingPayload: true,
                payload: newPayload,
            })
        } else {
            this.clearPayload();
        }
    }

    clearPayload() {
        this.setState({
            checkingPayload: false,
            confirming: false,
            payload: {
                add: {},
                purge: {}
            }
        })
    }

    removeFromPayload(wks, specID, type) {
        const newPayload = {
            add: { ...this.state.payload.add },
        };
        delete newPayload[type][wks][specID];
        this.setState({
            ...this.state,
            payload: newPayload
        })
    }

    cancelUpload() {
        this.setState({
            confirming: false
        })
    }

    confirmUpload() {
        const newPayload = {
            add: { ...this.state.payload.add },
        };
        upload(newPayload);
        this.clearPayload();
    }

    render() {
        const showModal = this.state.confirming ?
            <Modal closeModal={this.cancelUpload}>
                <div>
                    <h2>Confirm upload</h2>
                    <button onClick={this.cancelUpload}>Cancel</button>
                    <button onClick={this.confirmUpload}>Confirm</button>
                </div>
            </Modal> :
            null;

        return (
            <div className={classes.Uploader}>
                {showModal}
                <div className={classes.InputArea}>
                    <InputReader submitInput={this.addToPayload}></InputReader>
                </div>
                <div className={classes.ToBeUpdated}>
                    <Payload
                        removeSpec={this.removeFromPayload}
                        checkingPayload={this.state.checkingPayload}
                        payload={this.state.payload}></Payload>
                    <button onClick={() => this.setState({confirming: true})}>Upload</button>
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
        for (let spec in state.pending[wks]) {
            pending[wks][spec] = true;
        }
    }
    return {
        currPending: pending
    }
}

export default connect(mapStateToProps)(Uploader);
