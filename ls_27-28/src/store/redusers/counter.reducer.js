import {PLUS, MINUS, ZERO} from '../constants';
import {counterInitStore} from '../store';

export const counter = (store = counterInitStore, action) => {
    switch (action.type) {
        case PLUS: return {
            ...store,
            count: store.count + 1
        }
        case MINUS: return {
            ...store,
            count: store.count - 1
        }
        case ZERO: return {
            ...store,
            count: 0
        }
        default: return store;
    }
}