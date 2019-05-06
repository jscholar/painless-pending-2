import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Worksheet.module.css'

const Worksheet = (props) => {

    return (
        <div className={classes.Worksheet}>
            <NavLink activeClassName={classes.active} 
                to={`/pending/${props.wksNumber}`}>
                <span>{props.wksNumber}</span>
                <span></span>
            </NavLink>
        </div>
    )
};

export default Worksheet;
