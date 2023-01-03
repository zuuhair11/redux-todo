import { configureStore } from '@reduxjs/toolkit' ;
import itemsSlice from './features/todo/itemsSlice' ;

const store = configureStore({
    reducer: {
        items: itemsSlice,
        
    }
});



export default store;
