import {useEffect, useState} from 'react';
import {useLocation, useParams, useResolvedPath, useNavigate} from "react-router-dom";

export const User = () => {

    const [user, setUser] = useState({})
    // ({
    //     name: '',
    //     id: '',
    //     website: ''
    // })

    const location = useLocation();
    const params = useParams();
    const {id} = useParams();

    useEffect(() => {
        // console.log(location);
        // console.log(window.location);
        console.log(params)
    })

    const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

    useEffect(() => {
        fetch(userUrl)
        .then(userJson => userJson.json())
        .then(user => setUser(user))
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
            Single user:

            <div>
                {user?.id} - {user?.name} - {user?.website}
            </div>
        </div>
    )
}