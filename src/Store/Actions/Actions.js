
export const actionTypes = { 
    STORE_PENDING: 'STORE_PENDING',
    STORE_SPEC: 'STORE_SPEC'
};

export const storePending = (newPending) => {
    return {
        type: actionTypes.STORE_PENDING,
        newPending: newPending
    }
};

export const storeSpec = (spec) => {
    return {
        type: actionTypes.STORE_SPEC,
        newSpec: spec
    }
}
