import {useEffect} from 'react';
import myStore from './store';

import { connect, ConnectedProps } from 'react-redux'


import {
    plus,
    setNull,
    minus
} from './store/actions';

const Counter = ({
    count,
    plus,
    setNull,
    minus
}) => {

    useEffect(() => {
        
        // console.log(myStore.getState(), 'get state');
        // console.log(myStore.dispatch(plus()), 'dispatch');
        // console.log(myStore.subscribe(lisener => ), 'dispatch');

        // myStore.subscribe(lisener => {console.log(lisener, 'dispatch')})
    }, []);

    // myStore.subscribe(lisener => (console.log(lisener, 'dispatch')))
    // console.log()

    const setZero = () => setNull()
    const setAdd = () => plus()
    const setM = () => minus()


    return (<>
        <button onClick={setM}>Minus</button>
            <h3>
                Count: {count}
            </h3>
        <button onClick={setAdd}>Plus</button>
        <hr>
        </hr>
        <button onClick={setZero}>Set 0</button>
    </>);
}

const mapStateToProps = (state) => ({
    // count: state.count
    ...state
});

const mapDispatchToProps = dispatch => ({
    // plus: dispatch(plus),
    plus: () => dispatch(plus()),
    setNull: () => dispatch(setNull()),
    minus: () => dispatch(minus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
