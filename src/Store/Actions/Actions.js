
export const actionTypes = { 
    STORE_PENDING: 'STORE_PENDING',
    STORE_SPEC: 'STORE_SPEC',
    UPDATE_WKS_PENDING: 'UPDATE_WKS_PENDING'
};

export const storePending = (pendingSnapshot) => {
    const newPending = pendingSnapshot.val()
    return {
        type: actionTypes.STORE_PENDING,
        newPending: { ...newPending }
    }
};

export const updateWksPending = (wksSnapshot) => {
    const wks = wksSnapshot.key;
    const wksData = wksSnapshot.val();
    return {
        type: actionTypes.UPDATE_WKS_PENDING,
        wks,
        wksData
    }
}

export const storeSpec = (specSnapshot) => {
    const specID = specSnapshot.key;
    const specData = specSnapshot.val();
    return {
        type: actionTypes.STORE_SPEC,
        newSpec: {
            id: specID,
            ...specData
        }
    }
}
