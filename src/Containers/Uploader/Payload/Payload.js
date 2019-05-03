import React from 'react';

import classes from './Payload.module.css'

const Payload = (props) => {
    return (
        <div className={classes.PayloadWrapper}>
            <h2>Pending Changes</h2>
            <div className={classes.Payload}>
                <div className={classes.PendingAdd}>
                    <h3>Pending Add</h3>
                    <hr/>
                </div>
                <div className={classes.PendingPurge}>
                    <h3>Pending Purge</h3>
                    <hr />
                </div>
            </div>
        </div>
    )
};

export default Payload;
