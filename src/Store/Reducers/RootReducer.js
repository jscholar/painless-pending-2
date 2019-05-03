import blankPending from '../../Constants/WKS'

const initialState = {
    subscribedData: false,
    pending: {
        ...blankPending
    },
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PENDING':
            const newPending = {
                ...action.newPending
            }
            return {
                ...state,
                pending: newPending
            }
        default:
            return state;
    }
}

export default rootReducer;
