import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './WorksheetLink.module.css'
import WithStatusClass from '../../../../hoc/WithStatusClass/WithStatusClass';
import statusTypes from './../../../../Constants/STATUS_TYPES';

const WorksheetLink = (props) => {
    const counts = {
        [statusTypes.unresolved]: 0,
        [statusTypes.watch]: 0,
        [statusTypes.resolved]: 0,
    }
    Object.values(props.specs).forEach(specStatus => counts[specStatus]++);
    let wksStatus = statusTypes.resolved;
    wksStatus = counts[statusTypes.watch] > 0 ? statusTypes.watch : wksStatus;
    wksStatus = counts[statusTypes.unresolved] > 0 ? statusTypes.unresolved : wksStatus;
    return (
        <div className={classes.WorksheetLink}>
            <WithStatusClass status={wksStatus}>
                <NavLink activeClassName={classes.active}
                    to={`/pending/${props.wksNumber}`}>
                    <span>{props.wksNumber}</span>
                    <div className={classes.StatusCounters}>
                        <WithStatusClass key={statusTypes.unresolved} status={statusTypes.unresolved}>
                            <span className={classes.Counter}>{counts[statusTypes.unresolved]}</span>
                        </WithStatusClass>
                        <WithStatusClass key={statusTypes.watch} status={statusTypes.watch}>
                            <span className={classes.Counter}>{counts[statusTypes.watch]}</span>
                        </WithStatusClass>
                    </div>
                </NavLink>
            </WithStatusClass>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        specs: state.pending[ownProps.wksNumber]
    }
}

export default connect(mapStateToProps)(WorksheetLink);
