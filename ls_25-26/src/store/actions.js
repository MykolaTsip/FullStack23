
export const SET_NULL = 'null';
export const PLUS = 'plus';
export const MINUS = 'minus';

export const P_BY_VALUE = 'p_value';
export const M_BY_VALUE = 'm_value';



export const setNull = () => {
    return {
        type: SET_NULL
    }
}

export const plus = () => {
    return {
        type: PLUS
    }
}

export const minus = () => {
    return {
        type: MINUS
    }
}

export const mValue = (payload) => {
    return {
        type: M_BY_VALUE,
        payload
    }
}

export const pValue = (payload) => {
    return {
        type: P_BY_VALUE,
        payload
    }
}


