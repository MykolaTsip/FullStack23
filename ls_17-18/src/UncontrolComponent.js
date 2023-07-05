import React, {useReducer, useRef} from 'react';

const initState = {
    f_name: '',
    l_name: '',
};

const redusers = (stare, action) => {
    switch(action.type) {
        case 'f': 
            return {...stare, f_name: action.xxx}
    }
}

export const UnForm = () => {
    const [state, dispatch] = useReducer(redusers, initState);

    const fName = useRef();
    // const lName = useRef();
    // const age = useRef();

    const formM = useRef('')


    const changeD = () => {
        console.log(formM)
        dispatch({type: 'f', xxx: formM.current[0].value})

    }

    return (
        <div>
            <form ref={formM}>
                <input
                    ref={fName} 
                 defaultValue={state.f_name} />
                <input defaultValue={state.l_name}/>
                
            </form>
            <button onClick={changeD}>
                SUBMIT
            </button>
            <div>
                { state.f_name } / 
            </div>
        </div>
    )
}
