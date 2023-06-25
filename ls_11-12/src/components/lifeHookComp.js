import React, {useState, useEffect} from 'react';


export default function MyFunk() {

    const [count, setCount] = useState(0);
    const [count2, setC2] = useState(10);

    const newCount = () => setCount(count+1)

    const newCount2 = () => setC2(count2*count2);



    const myAlert = () => alert('You change your component!)');


    useEffect(() => {

        console.log(22222)
        // myAlert()

      return () => console.log('componentWillUnmount')
    }, [count, count2])


    // useEffect(() => {

    //     console.log(3333)
    //     // myAlert()

    //   return () => console.log('componentWillUnmount')
    // })

  

    return (
        <div>
            <div>
                <button onClick={newCount} >
                        Add 1
                </button>
                <div>
                {count}
                </div>

                <button onClick={newCount2}>
                    Set *
                </button>
                { count2 }
            </div>
        </div>
    )
}