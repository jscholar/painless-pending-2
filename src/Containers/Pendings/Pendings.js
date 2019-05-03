import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Worksheets from './Worksheets/Worksheets';
import SpecMenu from './SpecMenu/SpecMenu';

import database from './../../Database/instance';

import classes from './Pending.module.css'

class Pendings extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    
    render() {
        return (
            <div className={classes.PendingsWrapper}>
                <div className={classes.WorksheetMenu}>
                    <Worksheets></Worksheets>
                </div>
                <div className={classes.SpecimenMenu}>
                    <Route 
                        path={'/pending/:wks'}
                        component={SpecMenu}>
                    </Route>
                </div>
            </div>
        )
    }
};

export default Pendings;
