import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './TabElement.module.css'

const TabElement = (props) => (
    <div className={classes.TabElement}>
        <NavLink 
            activeClassName={classes.active}
            exact={props.exact}
            to={props.link}>
            {props.children}
        </NavLink>
    </div>
);

export default TabElement;
