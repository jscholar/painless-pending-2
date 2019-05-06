import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSpec, fetchPending } from './../../Database/database';
import WorksheetMenu from './WorksheetMenu/WorksheetMenu';
import SpecMenu from './SpecMenu/SpecMenu';

import classes from './Pending.module.css'
import Specimen from './Specimen/Specimen';

class Pendings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={classes.PendingsWrapper}>
                <div className={classes.WorksheetMenu}>
                    <WorksheetMenu></WorksheetMenu>
                </div>
                <div className={classes.SpecimenMenu}>
                    <Route 
                        path={'/pending/:wks'}
                        component={SpecMenu}>
                    </Route>
                </div>
                <div className={classes.SpecimenWrapper}>
                    {this.props.location.search ? <Specimen></Specimen> : null}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        pending: { ...state.pending },
    }
}

export default connect(mapStateToProps)(Pendings);
