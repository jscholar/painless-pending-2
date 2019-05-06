import React from 'react';

import Worksheet from './Worksheet/Worksheet';

import WKS from '../../../Constants/WKS';

import classes from './Worksheet.module.css'

const Worksheets = (props) => (
    <div className={classes.Worksheets}>
        {Object.keys(WKS).map((wks) => {
            return (
                <Worksheet
                    counts={props.pending[wks]}
                    key={wks}
                    wksNumber={wks}
                ></Worksheet>
            )
        })}
    </div>
);

export default Worksheets;
