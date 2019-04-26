import React from 'react';

import Navbar from './Navigation/Navbar';

import classes from './Layout.module.css'

const Layout = (props) => (
    <div className={classes.Layout}>
        <div className={classes.Header}>
            <Navbar></Navbar>
        </div>
        <div className={classes.Main}>
            {props.children}
        </div>
    </div>
);

export default Layout;
