
import React, {useContext, useEffect} from "react"

import { MyCont } from './App';

export const Cont = () => {
    const myCont1 = useContext(MyCont);


    useEffect(() => {
            // console.log(MyCont);
            console.log(myCont1)
    })

    const changeBg = () => {
        if (myCont1.isYellow === 'bg-yellow') {
            myCont1.updateC({...myCont1, isYellow: ''})
        } else {
            myCont1.updateC({...myCont1, isYellow: 'bg-yellow'})
        }
    }

    return (
        <div>
            Hello Context
            <div>
                {/* {myCont.isYellow} */}
                {/* {MyCont} */}
                {/* <MyCont.Consumer>
                    {
                        (val) => <div> {val.isYellow} </div>
                    }
                </MyCont.Consumer> */}
                { myCont1.isYellow }
                <div>
                    <button onClick={changeBg}>
                        { myCont1.isYellow === 'bg-yellow' ? 'Remove bg' : 'Add bg'}
                    </button>
                </div>
            </div>
        </div>
    )
}