import React from 'react';

const Specimen = (props) => (
    <div>
        {props.spec.id}
        {Object.keys(props.spec.history).map(event => (
            <div key={event}>
                {props.spec.history[event].message}
            </div>
        ))}
    </div>
);

export default Specimen;
