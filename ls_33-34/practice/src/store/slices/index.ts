import {combineReducers} from 'redux';

import counter from './counter.slice';
import random from './random.slice';
import posts from './post.slice';


export default combineReducers({
    counter,
    random,
    posts
});
