import {createSlice} from '@reduxjs/toolkit';

import axios from 'axios';
import { dispatchType } from '../../models';

const url = 'https://jsonplaceholder.typicode.com/posts';

const getPost = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        getAsyncPosts: (state, action) => action.payload
    }
});


const {getAsyncPosts} = getPost.actions;

export const getPosts = () => (dispatch: dispatchType) => {
    axios.get(url)
    .then(({data}) => dispatch(getAsyncPosts(data)))
}

export default getPost.reducer;