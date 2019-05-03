import React from 'react';

import TabElement from './TabElement/TabElement'

import classes from './Tabs.module.css';

const Tabs = (props) => (
    <div className={classes.Tabs}>
        <TabElement
            link={"/pending"}>
            Pending List
        </TabElement>
        <TabElement
            link={"/upload"}>
            Add/Update Pending List
        </TabElement>
    </div>
);

export default Tabs;
