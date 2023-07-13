import {useState} from 'react';
import { connect } from "react-redux"

import {
    mValue,
    pValue
} from './store/actions';

const Change = ({plus, minus, count}) => {

    const [step, setStep] = useState(1);

    const p = () => plus(step);
    const m = () => minus(step);

    return(<>
          <button onClick={m}>Minus</button>
            <h3>
            Change--- Count from : {count}
            </h3>
        <button onClick={p}>Plus</button>
        <br/>
        <input type='number' value={step} onChange={(e) => setStep(+e.target.value)}/>
    </>)
}

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    plus: step => dispatch(pValue(step)),
    minus: step => dispatch(mValue(step))
})

export default connect(mapStateToProps,  mapDispatchToProps)(Change)