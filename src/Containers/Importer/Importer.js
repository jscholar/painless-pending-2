import React from 'react';

import classes from './Importer.module.css'
import parseInput from './parseInput/parseInput';
class Importer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileUpload: false,
            inputText: '',
            checkingPayload: false,
            payload: {}
        }
        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }

    handleSumbit(event) {
        event.preventDefault();
        const newPendings = parseInput(this.state.inputText);
        console.log(newPendings);
    }

    render() {

        return (
            <div className={classes.Importer}>
                <div className={classes.InputArea}>
                    <form onSubmit={this.handleSumbit} className={classes.Input}>
                        <textarea
                            value={this.state.inputText}
                            onChange={this.handleChange}
                            type="text" 
                            placeholder={"Enter new pending list here"} 
                            className={classes.InputText}>
                        </textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className={classes.ToBeUpdated}>
                </div>
            </div>
        )
    }
}

export default Importer;
