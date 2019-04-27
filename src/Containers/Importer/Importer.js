import React from 'react';

import Payload from './Payload/Payload';
import parseInput from './parseInput/parseInput';
import TxtImport from './TxtImport/TxtImport';

import classes from './Importer.module.css'
class Importer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileUpload: false,
            inputText: '',
            checkingPayload: false,
            pending: {},
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeFromPayload = this.removeFromPayload.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }

    handleClick(event) {
        event.preventDefault();
        const newPending = parseInput(this.state.inputText);
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
        newPending[wks] = newPending[wks].filter(spec => spec.specID != specID);
        this.setState({
            ...this.state,
            pending: newPending
        })
    }

    render() {

        return (
            <div className={classes.Importer}>
                <div className={classes.InputArea}>
                    <TxtImport></TxtImport>
                        <textarea disabled={this.state.fileUpload}
                            value={this.state.inputText}
                            onChange={this.handleChange}
                            type="text"
                            placeholder={"Enter new pending list here"}
                            className={classes.InputText}>
                        </textarea>
                        <button onClick={this.handleClick}>Submit</button>
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

export default Importer;
