import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import 'bootstrap/dist/css/bootstrap.css';

import { getUsers, usersLocal } from '../constants';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export const User = () => {

    const [users, setUsers] = useState(usersLocal);


    // useEffect(() => {
    //     if(users.length) {
    //         // fetchUsers().then(users => setUsers(users))
    //         async function fet() {
    //            const u = await fetchUsers()
    //             return setUsers(u)
    //         }

    //     }
    // })


    // const fetchUsers = async () => {
    //    const users = await fetch(getUsers, {method: "GET"})
    //     .then(val => {
    //         return val.json()
    //         })
    //     .then(users => {
    //         return users
    //     })
    //   }

    //    return users;
    // } 


    return (
        <div className='p-2'>
            <div className='d-flex justify-content-around'>
                {
                    users.map((user, i) => (
                        <Card key={i} className='w-25 border border-primary'>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {user.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {user.age}
                                </Typography>
                                <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"> <Link to={`/user/${user.id}`}> View details </Link></Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}