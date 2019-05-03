import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Worksheet.module.css'
import { pathToFileURL } from 'url';

const Worksheet = (props) => {
    let statusClass = ' ';
    switch (props.status) {
        case 'resolved':
            statusClass += classes.Resolved;
            break;
        case 'unresolved':
            statusClass += classes.Unresolved;
            break;
        default:
            break;
    }
    return (
        <div className={classes.Worksheet + statusClass}>
            <NavLink activeClassName={classes.active} to={`/pending/${props.wksNumber}`}>
                <span>{props.wksNumber}</span>
                <span></span>
            </NavLink>
        </div>
    )
};

export default Worksheet;
