import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';

export const productStore = configureStore({
  reducer: {
    productReducer: productSlice, //slice
  },
});
