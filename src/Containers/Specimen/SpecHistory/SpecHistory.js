import React from 'react';

import classes from './SpecHistory.module.css'

const SpecHistory = (props) => {
    let events = null;
    if (props.history) {
        events = Object.keys(props.history).reverse().map((event) => {
            return (
                <div className={classes.Event} key={event}>
                    <p>{props.history[event].date}</p>
                    <p>{props.history[event].message}</p>
                </div>
            )
        })
    }
    return (
        <div className={classes.History}>
            {events}
        </div>
    )
}

export default SpecHistory;
