import {
    PLUS,
    SET_NULL,
    MINUS,
    P_BY_VALUE,
    M_BY_VALUE
} from '../actions';
import { initStore } from '../store';

const appReduser = (store = initStore, action) => {

    switch (action.type) {
        case PLUS: {
            return {
                ...store,
                count: store.count + 1
            }
        }
        case MINUS: {
            return {
                ...store,
                count: store.count - 1
            }
        }
        case SET_NULL: {
            return {
                ...store,
                count: 0
            }
        }
        case P_BY_VALUE: {
            return {
                ...store,
                count: store.count + action.payload
            }
        }
        case M_BY_VALUE: {
            return {
                ...store,
                count: store.count - action.payload
            }
        }
        default: return store;
    }
}
export default appReduser