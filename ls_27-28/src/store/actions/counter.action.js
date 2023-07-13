import {PLUS, MINUS, ZERO} from '../constants';

export const plusAction = () => ({
    type: PLUS
});

export const minusAction = () => ({
    type: MINUS
});

export const setZeroAction = () => ({
    type: ZERO
});


export const plusAsyncAction = function() {
    return function (dispatch) {
        setTimeout(() => {dispatch(plusAction())}, 1500)
    }
}
