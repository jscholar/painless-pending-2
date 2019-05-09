import React from 'react';

import { NavLink } from 'react-router-dom';

import WithStatusClass from './../../../../hoc/WithStatusClass/WithStatusClass';
import classes from './SpecLink.module.css';

import { fetchSpec } from '../../../../Database/database';

const SpecLink = (props) => (
    <div onClick={() => fetchSpec(props.spec)} className={classes.SpecLink}>
        <WithStatusClass status={props.status}>
            <NavLink
                activeClassName={classes.Test}
                to={{
                    search: `?${encodeURIComponent('spec')}=${encodeURIComponent(props.spec)}`,
                }}>
                {props.spec}
            </NavLink>
        </WithStatusClass>
    </div>
);

export default SpecLink;
