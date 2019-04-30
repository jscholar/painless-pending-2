import React from 'react';

import Tabs from './../../Components/UI/Tabs/Tabs';

import classes from './Navbar.module.css';

const Navbar = (props) => (
    <div className={classes.Navbar}>
        <div className={classes.TabsWrapper}>
            <Tabs></Tabs>
        </div>
    </div>
);

export default Navbar;
