import React from 'react';

import { connect } from 'react-redux';
import { fetchSpec } from './../../../Database/database';

class Specimen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        let specDisplay = null;
        if (this.props.spec) {
            specDisplay = (
                <div>
                </div>
            )
        }
        return (
            <div>
                
            </div>
        )
    } 
};

const mapStateToProps = (state) => {
    const specProp = state.currentSpec && { ...state.currentSpec }
    return {
        spec: specProp
    }
}

export default connect(mapStateToProps)(Specimen);
