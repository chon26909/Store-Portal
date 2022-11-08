import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface OTP {
    otpToken: string;
    otpRef: string;
}

interface IRequestLogin {
    email: string;
    password: string;
}

interface IResponseLogin {
    mesage: string;
    data: OTP | undefined;
}

export const login = createAsyncThunk<IResponseLogin, IRequestLogin>('auth/login', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post<IResponseLogin>('/login', body);
        return data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});
