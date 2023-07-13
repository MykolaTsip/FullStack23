import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import appReduser from './redusers/reduces';
import todos from './redusers/todoReduser';

// const allRedusers = combineReducers({appReduser, todos})

const myStore = createStore(appReduser, composeWithDevTools());
export default myStore