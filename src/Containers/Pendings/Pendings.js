import React from 'react';

import database from './../../Firebase/instance';

class Pendings extends React.Component {
    constructor() {
        super();
        const pendingsRef = database.ref('specimens');
        pendingsRef.on('value', (snapshot) => {
            this.updatePendings(snapshot.val());
        });
        this.state = {
        }
    }
    
    render() {
        return(
            <div>
                Pending specimens table
            </div>
        )
    }
};

export default Pendings;
