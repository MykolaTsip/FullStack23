import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useId,
    useRef
} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Hooks.css';

    const initState = {count: 0}

    const myActions = {
        PLUS: 'plus',
        MINUS: 'minus',
        SET_DEFAULD: 'default'
    }

    const myReduser = (state, action) => {
        switch (action.type) {
            case myActions.PLUS: 
            return  {count: state.count + 1};

            case myActions.MINUS:
            return state.count - 1;

            case myActions.SET_DEFAULD: return 0
        }
    };

const ThemeContext = React.createContext(null);

export default function Hook () {
    const setCount = () => setC(count+1)
    const setData = () => setD({data: new Date().toString(), isClicked: true});

    const setPlus = () => dispatch({type: myActions.PLUS})

    const [count, setC ] = useState(0);
    
    const [date, setD ] = useState({
        data: null,
        isClicked: false
    });


    useEffect(() => {
        setD({data: new Date().toString(), isClicked: false});
        return () => console.log('2222')
    }, [count]);

    useLayoutEffect(() => {}, []);

    const ourContext = useContext(ThemeContext)


    const [state, dispatch] = useReducer(myReduser, initState);



    // console.log(state, 111, dispatch)
    

    // Принцип роботи useEffect під капотом
    // useEf(cb, arrr) {
    //     if(arr) {

    //     } else {
    //         [...count] = useState

    //         if (count !== prevC) {
    //             const a = cb()
    //             if(a && !document.Hook) {

    //             }
    //         }
    //     }
    // }



    return(<div>
       <div className="card w-100 ms-2 ps-2 Mybg">
        <div className='pb-4 mt-2'>
            <button className='btn btn-success' onClick={setCount}> Count </button>
            <button className='btn btn-warning' onClick={setData}> Data </button>
        </div>

        <div>
            { count }
        </div>
        <div>
            <div>
            {date.isClicked && 'Count is clicked!'}
            </div>
            { date.data }
        </div>

        
        <hr></hr>
        <button onClick={setPlus}> PLUS </button>
        { state.count }
        </div>
    </div>)
};