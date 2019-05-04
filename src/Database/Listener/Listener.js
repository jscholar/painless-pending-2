import database from '../instance';
import { storePending } from './../../Store/Actions/Actions';

class Listener {
    constructor(store) {
        this.store = store;
        this.listener = database.ref('specimens/');
        this.listener.on('child_added', (data) => this.updateStoredSpec(data));
        this.fetchPending();
    }

    fetchPending() {
        database.ref('worksheets/').once('value').then((snapshot) => {
            this.store.dispatch(storePending(snapshot.val()));
        })
    }

    updateStoredSpec(data, key) {

    }

    deleteStoredSpec(data) {

    }
}

export default Listener;
