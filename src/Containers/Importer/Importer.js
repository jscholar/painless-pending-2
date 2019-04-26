import React from 'react';

import classes from './Importer.module.css'

class Importer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={classes.Importer}>
                <div className={classes.InputArea}>
                    <h1>Upload New</h1>
                    <h2>Upload file</h2>
                    <h2>Paste textfield</h2>
                </div>
                <div className={classes.ToBeUpdated}>
                    <h1>Pendings to update</h1>
                </div>
            </div>
        )
    }
}

export default Importer;
