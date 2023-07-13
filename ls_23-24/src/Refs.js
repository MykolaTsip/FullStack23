import React, { useRef, useEffect } from 'react'

// import { ExR } from './ExRef';

export const RefComp = ({children}) => {

    const refF = useRef();
    const refC = React.createRef();

    // const r = useRef();


    useEffect(() => {
        console.log(refF, 'refF');
        console.log(refC, 'refC');
        // console.log(r, 'refC');
    });

    return (
        <div ref={refF}>
            <p ref={refC} >
                Hello RefComp

                {/* <div>
                    <ExR ref={r}/>
                </div> */}
            </p>
            <hr></hr>
            {children}
        </div>
    )
}
