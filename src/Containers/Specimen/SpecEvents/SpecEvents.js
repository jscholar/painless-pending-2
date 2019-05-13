import React from 'react';

import classes from './SpecEvents.module.css'

const SpecEvents = (props) => {
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
            <textarea 
                onChange={props.changeHandler} 
                value={props.messageText} 
                className={classes.NewMessage}>
            </textarea>
            <button onClick={props.submitMessage}>
                Submit
            </button>
            {events}
        </div>
    )
}

export default SpecEvents;
