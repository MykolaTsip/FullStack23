import {useState} from 'react'
import myStore from './store';

import {generateNum} from './store/slices/random.slice';

export const Random = () => {
    const [num, setNum] = useState(myStore.getState().random);

    myStore.subscribe(() => setNum(myStore.getState().random));

    const getNewNum = () => {
        myStore.dispatch(generateNum());
    };

    return (
    <div>
        <div>
         by getState: {myStore.getState().random}
         <br/>
         by subscribe: {num}
        </div>
        <button onClick={getNewNum}>Set new random value</button>
    </div>)
}