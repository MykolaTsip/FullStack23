import React, {useState, useRef} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const userEnum = {
 F_NAME: 'f_name',
 L_NAME: 'l_name',
 AGE: 'age',
 DESCRIBE: 'describe'
}

export const M = () => {

    const [user, setUser] = useState({
        toched: false,
        [userEnum.F_NAME]: '',
        [userEnum.L_NAME]: '',
        [userEnum.AGE]: '',
        [userEnum.DESCRIBE]: ''
    });

    const setUserField = ({value}, field) => {
        setUser({...user, toched: true, [field]: value})
    }

    const logFields = () => {
        console.log(user);
    }

    const refF = useRef();

    const UnControlForm = () => {
    
        console.log(
            refF.current[0].value,
            refF.current[1].value,
            refF.current[2],
        )
    }

    return (
        <div className='ms-4 me-4'>
            {/* <h2>Control Form: </h2>
            <input className='mt-4 me-4' name='f_name' placeholder='f name' value={user.f_name} onChange={(e) => setUserField(e.target, userEnum.F_NAME)}/>
            <input className='mt-4 me-4' name='l_name'  placeholder='l name' value={user.l_name} onChange={(e) => setUserField(e.target, userEnum.L_NAME)}/>
            <input className='mt-4 me-4' name='age'  placeholder='age' value={user.age} onChange={(e) => setUserField(e.target, userEnum.AGE)} />
            <input className='mt-4 me-4' name={userEnum.DESCRIBE}  placeholder={userEnum.DESCRIBE} value={user.describe} onChange={(e) => setUserField(e.target, userEnum.DESCRIBE)} />
            <div>
                { user.toched && user.l_name.length > 7 && 'You show put valid data' }
            </div>
            <button disabled={!user.l_name && !user.f_name && !user.age} onClick={logFields}> LOG </button> */}

            {/* <h2>Uncontrol Form: </h2>
            <form ref={refF} onSubmit={UnControlForm}>
            <input className='mt-4 me-4' name='f_name' placeholder='f name' />
            <input className='mt-4 me-4' name='l_name'  placeholder='l name' />
            <input className='mt-4 me-4' name='age'  placeholder='age' />
            <input className='mt-4 me-4' name={userEnum.DESCRIBE}  placeholder={userEnum.DESCRIBE} />
            <button type='submit' className='mt-4 me-4' > SUBMIT </button>

            </form>
            <button type='button' className='mt-4 me-4' onClick={UnControlForm}> button </button> */}

            <hr/>

            <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { user.f_name && user.l_name && user.age && `${user.f_name} - ${user.l_name} / ${user.age} old`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {user.describe}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
        </div>
    )
}