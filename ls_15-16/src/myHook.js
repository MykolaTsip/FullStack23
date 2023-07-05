import {useState, useEffect} from 'react';


// export function useMyFirstCustomHook(a = 0) {
//     const [count, setCount] = useState(a);

//     // useEffect(() => {
//     //     console.log('myFirstCustomHook', count);
//     //     setCount(count+1);
//     // })

//     return count;
// }



export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return windowWidth;
}


export function useCounter(num = 0) {
    const [count, setCount] = useState(num);

    useEffect(() => {
        console.log('clicked times: ', count)
    }, [count])


    return {
        count,
        setCount
    }

}


