import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSpec, fetchPending } from './../../Database/database';
import Worksheets from './Worksheets/Worksheets';
import SpecMenu from './SpecMenu/SpecMenu';

import classes from './Pending.module.css'
import Specimen from './Specimen/Specimen';

class Pendings extends React.Component {
    constructor() {
        super();
        this.state = {
            currSpec: null
        }
    }
    componentDidMount() {
        if (this.props.location.search) {
            this.getSpecFromURL();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search && prevProps.location.search !== this.props.location.search) {
            this.getSpecFromURL()
        }
    }

    getSpecFromURL() {
        const query = new URLSearchParams(decodeURIComponent(this.props.location.search));
        const newSpecNum = query.get('spec');
        fetchSpec(newSpecNum);
    }

    render() {
        return (
            <div className={classes.PendingsWrapper}>
                <div className={classes.WorksheetMenu}>
                    <Worksheets pending={this.props.pending}></Worksheets>
                </div>
                <div className={classes.SpecimenMenu}>
                    <Route 
                        path={'/pending/:wks'}
                        component={SpecMenu}>
                    </Route>
                </div>
                <div className={classes.SpecimenDetails}>
                    {Object.entries(this.props.spec).length ?
                     <Specimen spec={this.props.spec}></Specimen> :
                     'loading'}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        pending: { ...state.pending },
        spec: { ...state.currentSpec }
    }
}

export default connect(mapStateToProps)(Pendings);
