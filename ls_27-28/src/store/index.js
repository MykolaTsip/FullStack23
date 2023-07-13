
import {legacy_createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import thunk from 'redux-thunk';

import allReducers from './redusers';

const myStore = legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
export default myStore;