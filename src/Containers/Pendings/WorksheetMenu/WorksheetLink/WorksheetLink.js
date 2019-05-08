import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './WorksheetLink.module.css'
import WithStatusClass from '../../../../hoc/WithStatusClass/WithStatusClass';

const WorksheetLink = (props) => {
    const counts = {
        'unresolved': 0,
        'watch': 0,
        'resolved': 0,
    }
    Object.values(props.specs).forEach(specStatus => counts[specStatus]++);
    let wksStatus = 'resolved';
    wksStatus = counts['watch'] > 0 ? 'watch' : wksStatus;
    wksStatus = counts['unresolved'] > 0 ? 'unresolved' : wksStatus;
    return (
        <div className={classes.WorksheetLink}>
            <WithStatusClass status={wksStatus}>
                <NavLink activeClassName={classes.active}
                    to={`/pending/${props.wksNumber}`}>
                    <span>{props.wksNumber}</span>
                    <div className={classes.StatusCounters}>
                        {Object.keys(counts).map(status => (
                            <WithStatusClass key={status} status={status}>
                                <span className={classes.Counter}>{counts[status]}</span>
                            </WithStatusClass>
                        ))}
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
