import React from 'react';

import classes from './Payload.module.css'

const Payload = (props) => {
    let pendingAdd = null;
    let pendingPurge = null;

    const payloadToJSX = (payload, type) => {
        let JSX = "None";
        if (Object.entries(props.payload[type]).length !== 0) {
            JSX = Object.keys(payload).map(wks => (
                <div key={wks}>
                    <h3>{wks}</h3>
                    {Object.keys(payload[wks]).map(spec => (
                        <div className={classes.PayloadSpec} key={spec}>
                            <span>{spec}   </span>
                            <button onClick={() => props.removeSpec(wks, spec, type)}>X</button>
                        </div>
                    ))}
                </div>
            ))
        }
        return JSX;
    }

    if (props.checkingPayload) {
        pendingAdd = payloadToJSX(props.payload.add, 'add');
        pendingPurge = payloadToJSX(props.payload.purge, 'purge');
    }

    return (
        <div className={classes.PayloadWrapper}>
            <h2>Pending Changes</h2>
            <div className={classes.Payload}>
                <div className={classes.PendingAdd}>
                    <h3>Pending Add</h3>
                    <hr />
                    {pendingAdd}
                </div>
                <div className={classes.PendingPurge}>
                    <h3>Pending Purge</h3>
                    <hr />
                    {pendingPurge}
                </div>
            </div>
        </div>
    )
};

export default Payload;
