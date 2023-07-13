import { LOADED_USERS } from '../constants';
import { userInitStore } from '../store';

export const user = (state = userInitStore, action) => {
    switch (action.type) {
        case LOADED_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: return state;
    }
}