import React from 'react';

import Worksheet from './Worksheet/Worksheet';

import WKS from '../../../Constants/WKS';

import classes from './Worksheet.module.css'

const Worksheets = (props) => (
    <div className={classes.Worksheets}>
        {Object.keys(WKS).map((wks) => (
            <Worksheet 
                key={wks} 
                wksNumber={wks} 
                status={'resolved'}
                selectWorksheet={props.clickHandler}
                ></Worksheet>
        ))}
    </div>
);

export default Worksheets;
