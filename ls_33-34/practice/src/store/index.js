import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './slices';


const myStore = configureStore({
    reducer: rootReducer,
    devTools: true,
    
});

export default myStore;