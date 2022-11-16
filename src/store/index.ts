import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import auth from './slices/authSlice';
import users from './slices/userSlice';
import products from './slices/productsSlice';

const reducers = {
    auth,
    users,
    products
};

const store = configureStore({
    reducer: reducers,
    devTools: true
});

type Appdispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<Appdispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
