import {connect} from 'react-redux';

import {plusAction, minusAction, setZeroAction, plusAsyncAction} from './store/actions/counter.action';

const Counter = ({count, plusAction, minusAction, setZeroAction, plusAsyncAction}) => {

    return (<>
        <button onClick={() => minusAction()}>Minus</button>
            <h3>
                Count: {count}
            </h3>
        <button onClick={() => plusAction()}>Plus</button>
        <br/>
        <button onClick={() => plusAsyncAction()}>Plus after 1,5 sec</button>
        <hr>
        </hr>
        <button onClick={() => setZeroAction()}>Set 0</button>
    </>)
}

const mapStateToProps = (state) => ({
    count: state.counter.count
});

const mapDispatchToProps = {
    plusAction,
    minusAction,
    setZeroAction,
    plusAsyncAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)