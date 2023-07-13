import { createSlice } from '@reduxjs/toolkit';


const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        plus: function (state) { return state + 1 },
        minus: state => state - 1,
        zero: () => 0,
        asyncPls: (state, action) => state + action.payload
    }
});


export const {plus, minus, zero, asyncPls} = countSlice.actions;

export const asyncPlus = (payload) => dispatch => 
    setTimeout(
        () => dispatch(asyncPls(payload)),
        1500
    );

export default countSlice.reducer

