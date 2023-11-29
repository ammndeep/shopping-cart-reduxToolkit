import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/CartSlice';

const store = configureStore({
    reducer: {
        allCart: cartSlice.reducer,
    }
});

export default store;


