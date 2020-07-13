const INITIAL_STATE = {
    users: {},
    currentUser: {},
    isLoading: false,
    errorMessage: undefined

};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'UPDATE_USER_LIST':
            return {
                ...state,
                users: action.payload
            }
        case 'FETCH_USERS_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;
