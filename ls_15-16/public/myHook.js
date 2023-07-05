import { useState, useEffect } from 'react';


export function myFirstCustomHook (defaultVal = 0) {
    const [count, setCount] = useState(defaultVal)

    useEffect(() => {
        console.log('myFirstCustomHook', count)
        setCount(count+1);
    });
}