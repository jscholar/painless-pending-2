import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SpecMenu = (props) => {
    const specsDisplay = Object.keys(props.specs).map(spec => (
        <NavLink key={spec} to={{
            pathname: props.match.url,
            search: `?${encodeURIComponent('spec')}=${encodeURIComponent(spec)}`,
        }}>
            <div >
                {spec}
            </div>
        </NavLink>
    ))
    return (
        <div>
            {specsDisplay}
        </div>
    )
};

function mapStateToProps(state, ownProps) {
    return {
        specs: state.pending[ownProps.match.params['wks']]
    }
}

export default connect(mapStateToProps)(SpecMenu);
