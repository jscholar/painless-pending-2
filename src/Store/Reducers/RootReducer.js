import blankPending from '../../Constants/WKS'
import { actionTypes } from './../Actions/Actions';

const initialState = {
    subscribedData: false,
    pending: {
        ...blankPending
    },
    currentSpec: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PENDING:
            const newPending = {
                ...blankPending,
                ...action.newPending,
            }
            return {
                ...state,
                pending: newPending
            }
        case actionTypes.STORE_SPEC: 
            return {
                ...state,
                currentSpec: action.newSpec
            }
        default:
            return state;
    }
}

export default rootReducer;
