
export const actionTypes = { 
    STORE_PENDING: 'STORE_PENDING' 
};

export const storePending = (newPending) => {
    return {
        type: actionTypes.STORE_PENDING,
        newPending: newPending
    }
};
