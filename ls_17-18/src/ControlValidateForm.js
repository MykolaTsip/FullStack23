import React, {useState}  from 'react';
import { Link, NavLink } from 'react-router-dom';

const userEnum = {
    F_NAME: 'f_name',
    L_NAME: 'l_name',
    DESCRIBE: 'describe'
};

const validEnum = {
    [userEnum.F_NAME]: 'isFName',
    [userEnum.L_NAME]: 'isLName',
    [userEnum.DESCRIBE]: 'isDescribe',

}

export const  ControlF = () => {

    const [user, setUser] = useState({
        [userEnum.F_NAME]: '',
        [userEnum.L_NAME]: '',
        [userEnum.DESCRIBE]: '',
        [validEnum.f_name]: false,
        [validEnum.l_name]: false,
        [validEnum.describe]: false,
    })

    const changeUser = ({value}, field) => {
        setUser({...user, [field]: value, [validEnum[field]]: true}); 
    }

    const checkFName = () => (user.f_name.length < 3 || user.f_name.length > 5) && user[validEnum.f_name];
    // const checkFNamL = () =>  user.f_name.length > 5 && user[validEnum.f_name];


    const checkLName = () =>  user.l_name.length < 4 && user[validEnum.l_name];

    const checkDescribe = () => user.describe.length < 5 && user[validEnum.describe]


    return (
        <div>
            <form>
                <input value={user.f_name} onChange={(e) => changeUser(e.target, userEnum.F_NAME)} />
                <div> {checkFName() && 'You should put min 3 lett and less than 5 lett'} </div>

                <input value={user.l_name} onChange={(e) => changeUser(e.target, userEnum.L_NAME)}/>
                <div> {checkLName() && 'Your last name should includes i'} </div>

                <input value={user.describe} onChange={(e) => changeUser(e.target, userEnum.DESCRIBE)} />
                <div> {checkDescribe() && 'Your describe should ends on luck'} </div>
            </form>
            <button disabled={!checkFName() || checkLName() || checkDescribe()}>
                    SUBMIT
            </button>
            <div>
                {user.f_name} - {user.l_name} : {user.describe}
            </div>
            <Link className='fff' to='/'> Home Page </Link>
        </div>
    )
}