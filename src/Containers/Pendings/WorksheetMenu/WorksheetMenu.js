import React from 'react';
import { connect } from 'react-redux';
import WorksheetLink from './WorksheetLink/WorksheetLink';

import WKS from '../../../Constants/WKS';

import classes from './WorksheetMenu.module.css'

const Worksheets = (props) => (
    <div className={classes.WorksheetsMenu}>
        {Object.keys(WKS).map((wks) => {
            return (
                <WorksheetLink
                    specs={props.pending[wks]}
                    key={wks}
                    wksNumber={wks}
                ></WorksheetLink>
            )
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        pending: state.pending
    }
}

export default connect(mapStateToProps)(Worksheets);
