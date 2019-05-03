export const FETCH_PENDING = 'FETCH_PENDING'

export const fetchPending = (newPending) => {
    return {
        type: FETCH_PENDING,
        newPending
    }
};
