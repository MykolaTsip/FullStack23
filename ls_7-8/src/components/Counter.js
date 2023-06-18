import React, {useState}  from 'react';



export const Counter = () => {
    // let count = 0;
    let [ count, setCount ] = useState(0);
    // let [ color, setColor ] = useState(0);


    const inc = () => {
        console.log(count);
        // count + 1
        // console.log(count);
        setCount(++count)
    }
    // const dec = () => count - 1
    const dec = () => setCount(count - 1);


    return (
        <div>
            <p>
            My count:
            </p>
            {count}
            <div>
            <button onClick={dec}>
                decrement
            </button>
            <button onClick={inc}>
                increment
            </button>
            </div>
        </div>
    )
}