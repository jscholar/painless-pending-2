
export const actionTypes = { 
    STORE_PENDING: 'STORE_PENDING',
    STORE_SPEC: 'STORE_SPEC',
    UPDATE_WKS_PENDING: 'UPDATE_WKS_PENDING'
};

export const storePending = (newPending) => {
    return {
        type: actionTypes.STORE_PENDING,
        newPending: newPending
    }
};

export const updateWksPending = (wks, wksData) => {
    return {
        type: actionTypes.UPDATE_WKS_PENDING,
        wks,
        wksData
    }
}

export const storeSpec = (spec) => {
    return {
        type: actionTypes.STORE_SPEC,
        newSpec: spec
    }
}
