import { combineReducers } from 'redux';

import userReducer from './users/user.reducer.js';

export default combineReducers({
    usersData: userReducer
});
