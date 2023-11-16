import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const fetchFromLocalStorage = () => {
//   let value = localStorage.getItem('value');
//   if (value) {
//     return JSON.parse(value);
//   } else {
//     return []; // empty array
//   }
// };

// const storeInLocalStorage = (data) => {
//   localStorage.setItem('value', JSON.stringify(data));
// };

// const initialState = {
//   value: fetchFromLocalStorage(),
// };

const initialState = {
  loading: false,
  value: [], // empty array
  error: '',
};

export const getProducts = createAsyncThunk('getProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  // console.log(response);
  // console.log(response.data);
  // console.log(response.data.products); // Returns a 20-element array where each element is an object.
  console.log(response.data.products);
  return response.data.products;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload; // api'den gelen verileri value'ya doldurma işlemi
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = 'Bad fetching!';
    });
  },
});

export default productsSlice.reducer;
