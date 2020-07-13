import { takeEvery, put } from 'redux-saga/effects';
import { fetchUsers } from '../../utils/fetch.data';
import {
    fetchUsersSuccess,
    fetchUsersFailure
} from './user.actions';

export function* fetchUsersAsync() {
    try {
        const users = yield fetchUsers();
        if (users.error) {
            yield put(fetchUsersFailure(users.error));
        } else {
            yield put(fetchUsersSuccess(users));
        }
    } catch(error) {
        yield put(fetchUsersFailure(error.message));
    }
}
export function* fetchUsersStart() {
    yield takeEvery(
        'FETCH_USERS_START',
        fetchUsersAsync
    );
}
