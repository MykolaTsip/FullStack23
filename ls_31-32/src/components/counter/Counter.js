import {useState} from 'react';


export const Counter = () => {
    const [count, setCount] = useState(0);

    const pls = () => setCount(count+1);
    const min = () => setCount(count-1);


    return (<div>
        <button onClick={pls} data-testid="pls-btn">PLUS</button>
        <div>Count is: {count}</div>
        <button onClick={min} data-testid="min-btn">MINUS</button>
    </div>)
}