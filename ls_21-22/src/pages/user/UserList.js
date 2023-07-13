import {useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom'

import {getUserList} from '../../api/user.api';



export const Users = ({num}) => {
    const [users, setU] = useState([]);


    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(usersUrl)
        .then(usersJson => usersJson.json())
        .then(users => setU(users))
        .catch(err => console.log(err));
    }, [usersUrl])

    return (
        <div>
            Hello user {num}
            <div>
            { 
                users.map((user, i) => (
                    <div key={i}>
                        {user.name}
                        <Link to={{pathname: `/users/${user.id}/dddddd`, state: user}}> Show details </Link>
                    </div>
                ))
            }
            </div>
        </div>
    )
}