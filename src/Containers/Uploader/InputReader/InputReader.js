import React from 'react';

import TxtImport from './TxtImport';

import classes from './InputReader.module.css';
import Aux from './../../../Components/UI/Auxilliary/Auxilliary';

class InputReader extends React.Component {
    constructor() {
        super();
        this.state = {
            fileUpload: false,
            inputText: '',
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    handleFile(text) {
        this.setState({
            inputText: text,
            fileUpload: true
        })
    }

    resetInput() {
        this.setState({
            fileUpload: false,
            inputText: ''
        })
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value,
        })
    }

    render() {
        return (
            <Aux>
                <h2>Upload text file or paste new pending</h2>
                <TxtImport cancelFileInput={this.resetInput} fileHandler={this.handleFile}></TxtImport>
                <textarea disabled={this.state.fileUpload}
                    value={this.state.inputText}
                    onChange={this.handleChange}
                    type="text"
                    placeholder={"Enter new pending list here"}
                    className={classes.InputText}>
                </textarea>
                <button onClick={() => this.props.submitInput(this.state.inputText)}>Submit</button>
            </Aux>
        )
    }

}

export default InputReader;
