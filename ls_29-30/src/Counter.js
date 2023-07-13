import {useDispatch, useSelector} from 'react-redux';

import {plus, minus, zero, asyncPlus} from './store/slices/counter.slice';

export const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter);

    const p = () => dispatch(plus());
    const m = () => dispatch(minus());
    const mzero = () => dispatch(zero());
    const sAsPl = () => dispatch(asyncPlus(2));

    return (<div>
        <button onClick={m}>Minus</button>
            <h3>
                Count: {count}
            </h3>
        <button onClick={p}>Plus</button>
        <br/>
        <button onClick={mzero}>set 0</button>
        <br/>
        <button onClick={sAsPl}>Set +2 after 1500 </button>
    </div>)
}