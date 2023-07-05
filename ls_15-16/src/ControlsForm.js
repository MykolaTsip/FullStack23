import React, {useState, useRef, useEffect} from 'react';

import { OutlinedInput } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ControlForm = () => {

    const [text, setText] = useState('');

    const [user, setUserData] = useState({
        name: '',
        age: '',
        describe: ''
    })

    const myText = ({target}) => {
        console.log(target.value, target.value.length)
        setText(target.value)
    }

    const setName = ({target}) => {
        setUserData({...user, name: target.value})
    }

    const setAge = ({target}) => {
        setUserData({...user, age: target.value})
    }

    const setDes = ({target}) => {
        setUserData({...user, describe: target.value})
    }


    const logData = (e) => {
        console.log(e)
        // alert(e)

        return false
    }

    const myInp = useRef();

    const myFormInp = useRef();

    useEffect(() => {
        console.log(myInp)
    }, [myInp])

    const showRef = () => {
        console.log(myInp)

        console.log(myFormInp)
    }

    return (
        <div>
            <input value={text} onChange={myText}></input>
            <p>
                {text}
            </p>

            <hr/>

            <form onSubmit={logData} >
                <div>
                    <OutlinedInput value={user.name} onChange={(e) => setName(e)}  placeholder='name'/>
                    {user.name.length < 3 && 'Please tap 3 symbols!'}
                </div>
                <div>
                    <OutlinedInput value={user.age} onChange={setAge} type='number'  placeholder='age'/>
                </div>
                <div>
                    <TextareaAutosize value={user.describe} onChange={setDes}  placeholder='describe'/>
                </div>
                <input type='submit' value='Sub' disabled={user.name.length < 3} />
            </form>

            <div>
                <h1>
                    User info:
                </h1>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { user.name && user.age && `${user.name} - ${user.age}`}
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


            <input ref={myInp} />
            <button onClick={showRef}> aaaa </button>

<hr/>
<form ref={myFormInp}  onSubmit={logData} >
                <div>
                    <OutlinedInput name='name'  placeholder='name'/>
                    {user.name.length < 3 && 'Please tap 3 symbols!'}
                </div>
                <div>
                    <OutlinedInput name='age' type='number'  placeholder='age'/>
                </div>
                <div>
                    <TextareaAutosize name='desc'  placeholder='describe'/>
                </div>
                <input type='submit' value='Sub' disabled={user.name.length < 3} />
            </form>
        </div>
    )
}

export default ControlForm;