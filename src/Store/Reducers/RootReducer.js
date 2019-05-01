const initialState = {
    subscribedData: false,
    pending: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PENDING':
            
        default:
            return state;
    }
}

export default rootReducer;
