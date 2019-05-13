import React from 'react';

import classes from './AccessionNum.module.css'

const AccessionNum = (props) => {
    const selectSpecID = () => {
        const range = document.createRange();
        range.selectNode(document.getElementById("specID"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
    
    return (
        <div className={classes.Accession}>
            <span className={classes.AccessionLabel}>Acc #</span>
            <span id="specID" onClick={selectSpecID} className={classes.AccessionNum}>{props.specID}</span>
            <i title="Copy to Clipboard" className={classes.CopyIcon + " far fa-copy"}></i>
        </div>
    )
}


export default AccessionNum;
