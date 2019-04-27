import React from 'react';

const Payload = (props) => (
    <div>
        {Object.keys(props.pending).map(wks => (
            <ul key={wks}>
                <h1>{wks}</h1>
                {props.pending[wks].map(spec => (
                    <li key={spec.specID}>
                        {spec.specID}
                        <button onClick={() => props.removeSpec(wks, spec.specID)}>Delete</button>
                    </li>
                ))}
            </ul>    
        ))}
    </div>
);

export default Payload;
