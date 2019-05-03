import blankPending from '../../Constants/WKS'
import { actionTypes } from './../Actions/Actions';

const initialState = {
    subscribedData: false,
    pending: {
        ...blankPending
    },
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
        case actionTypes.STORE_PENDING:
            const newPending = {
                ...blankPending,
                ...action.newPending,
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
