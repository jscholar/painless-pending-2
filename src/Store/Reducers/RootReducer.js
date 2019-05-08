import blankPending from '../../Constants/WKS'
import { actionTypes } from './../Actions/Actions';

const initialState = {
    subscribedData: false,
    fetchedPending: false,
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
                fetchedPending: true,
                pending: newPending
            }
        case actionTypes.STORE_SPEC: 
            return {
                ...state,
                currentSpec: action.newSpec
            }
        case actionTypes.UPDATE_WKS_PENDING:
            const updatedPending = {...state.pending};
            updatedPending[action.wks] = {...state.pending[action.wks]};
            updatedPending[action.wks][action.spec] = action.status
            return {
                ...state,
                pending: {
                    ...updatedPending
                }
            }
        default:
            return state;
    }
}

export default rootReducer;
