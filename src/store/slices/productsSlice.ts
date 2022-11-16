import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import store from '..';
import { IProduct } from '../../types/product';
import ENDPOINT from '../api';

interface IProductsStore {
    loading: boolean;
    data: IProduct[];
}
interface IRequestAddProduct extends IProduct {}

export const addProduct = createAsyncThunk<{ message: string }, IRequestAddProduct>('procuct/add', async (body, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(ENDPOINT.ADD_PRODUCT, body);
        return data;
    } catch (error) {
        console.log('error', error);
        rejectWithValue(error);
    }
});

export const getProducts = createAsyncThunk<IProduct[], void>('products', async () => {
    try {
        const {
            data: { data }
        } = await axios.get<any>(ENDPOINT.GET_PRODUCTS);
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState: IProductsStore = {
    loading: false,
    data: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
    }
});

export default productsSlice.reducer;
