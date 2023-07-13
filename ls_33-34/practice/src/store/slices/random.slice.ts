import { createSlice } from '@reduxjs/toolkit';

const randSlice = createSlice({
    name: 'random',
    initialState: Math.floor(Math.random()*100),
    reducers: { 
        generateNum: () => Math.floor(Math.random()*100)
    }
});


export const { generateNum } = randSlice.actions;

export default randSlice.reducer;
