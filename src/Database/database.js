import database from './instance';
import { storePending, storeSpec, updateWksPending } from './../Store/Actions/Actions';
import { store } from './../index';
import statusTypes from './../Constants/STATUS_TYPES';

export const listenSpecs = () => {
    database.ref('specimens/').on('child_changed', (snapshot) => {
        if (store.getState().currentSpec && snapshot.key === store.getState().currentSpec.id) {
            store.dispatch(storeSpec(snapshot));
        }
    })

    database.ref('worksheets/').on('child_changed', (snapshot) => {
        store.dispatch(updateWksPending(snapshot));
    })
}

export const upload = (payload) => {
    for (let wks in payload.add) {
        for (let spec in payload.add[wks]) {
            const newMessage = `Added worksheet: ${wks}`;
            updateStatus(spec, wks, statusTypes.unresolved, newMessage)
        }
    }
    for (let wks in payload.purge) {
        for (let spec in payload.purge[wks]) {
            database.ref(`worksheets/${wks}/${spec}`).remove();
        }
    }
}

export const fetchSpec = (specID) => {
    database.ref(`specimens/${specID}`).once('value')
        .then((snapshot) => {
            store.dispatch(storeSpec(snapshot))
        })
}

export const fetchPending = () => {
    database.ref('worksheets/').once('value')
        .then((snapshot) => {
            store.dispatch(storePending(snapshot));
        })
}

export const updateStatus = (specID, wks, status, message) => {
    const specNode = {
        wksNum: wks,
        status: status
    }
    if (status === statusTypes.resolved) status = null;
    database.ref(`worksheets/${wks}/${specID}`).set(status);
    database.ref(`specimens/${specID}/worksheets/${wks}`).update(specNode);
    addEvent(specID, message);
}

export const addEvent = (specID, message) => {
    const date = new Date().toLocaleString('en-US', { hour12: false })
    database.ref(`specimens/${specID}/history`).push().set({
        date: date,
        message: message
    })
}
