import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {userAsyncLoadAction} from './store/actions/user.action'

export const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(function (store) { return store.user.users });

    useEffect(() => {
        if (!users.length) {
            dispatch(userAsyncLoadAction());
        }
        console.log(users)
    })

    return (<>
        <div>
            {
                users.map((user, i) => <div key={i}>{user.id}: {user.name}</div>)
            }
        </div>
    </>)
};