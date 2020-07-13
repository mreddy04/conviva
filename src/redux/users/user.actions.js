export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

export const updateUsersList = (users) => ({
    type: 'UPDATE_USER_LIST',
    payload: users
});

export const fetchUsersStart = () => ({
    type: 'FETCH_USERS_START',
});

export const fetchUsersSuccess = users => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users
});

export const fetchUsersFailure = errorMessage => ({
    type: 'FETCH_USERS_FAILURE',
    payload: errorMessage
});
