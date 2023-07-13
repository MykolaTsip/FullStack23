import { LOADED_USERS } from '../constants';

export const userLoadedAction = (payload) => ({
    type: LOADED_USERS,
    payload
});

export const userAsyncLoadAction = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => dispatch(userLoadedAction(users)))
    .catch(err => alert(err))
}