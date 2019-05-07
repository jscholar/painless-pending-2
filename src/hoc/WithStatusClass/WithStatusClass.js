import React from 'react';
import Aux from './../Auxilliary/Auxilliary';

import classes from './Status.module.css'

const WithStatusClass = (props) => {
    let statusClass = classes.Status
    switch(props.status) {
        case 'unresolved':
            statusClass += ' ' + classes.Unresolved
            break;
        case 'watch':
            statusClass += ' ' + classes.Watch;
            break;
        case 'resolved': {
            statusClass += ' ' + classes.Resolved;
            break;
        }
        default:
            break;
    }
    return (
        <div className={statusClass}>
            {props.children}
        </div>
    )
};

export default WithStatusClass;
