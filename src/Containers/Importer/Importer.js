import React from 'react';

import classes from './Importer.module.css'

class Importer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: "upload-file",
        }
        this.changeMethod = this.changeMethod.bind(this);
    }

    changeMethod(event) {
        this.setState({
            method: event.target.value
        })
    }

    render() {


        return (
            <div className={classes.Importer}>
                <div className={classes.Input}>
                    <div className={classes.Options}>
                        <input
                            value="upload-file"
                            checked={this.state.method === "upload-file"}
                            type="radio"
                            onChange={this.changeMethod}></input>
                        <label>Upload file</label>
                        <input
                            value="copy-text"
                            checked={this.state.method === "copy-text"}
                            type="radio"
                            onChange={this.changeMethod}></input>
                        <label>Copy Text</label>
                    </div>
                    <div className={classes.InputArea}>
                    </div>
                </div>

                <div className={classes.ToBeUpdated}>
                    <h1>Pendings to update</h1>
                </div>
            </div>
        )
    }
}

export default Importer;
