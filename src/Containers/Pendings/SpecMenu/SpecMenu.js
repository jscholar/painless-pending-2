import React from 'react';
import { connect } from 'react-redux';

const SpecMenu = (props) => {
    const specsDisplay = Object.keys(props.specs).map(spec => (
        <div key={spec}>
            {spec}
        </div>
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
