import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import SpecLink from './SpecLink/SpecLink'

import classes from './SpecMenu.module.css';

const SpecMenu = (props) => {
    let menu = Object.keys(props.specs).map(spec =>
        <SpecLink key={spec} spec={spec} status={props.specs[spec]}></SpecLink>
    )
    return (
        <div className={classes.SpecMenu}>
            {menu}
        </div>
    )
};

function mapStateToProps(state, ownProps) {
    return {
        specs: state.pending[ownProps.match.params['wks']]
    }
}

export default connect(mapStateToProps)(SpecMenu);
