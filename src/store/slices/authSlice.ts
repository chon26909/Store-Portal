import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'js-cookie';
import ENDPOINT from '../api';

interface IRequestLogin {
    email: string;
    password: string;
}

// interface IResponseLogin extends IOTP {}
interface IResponseLogin {
    token: string;
}

interface IResponseVerifyOTP {
    message: string;
    token: string;
}
interface IOTP {
    mobileNumber: string;
    token: string;
    ref: string;
}

interface IAuthState {
    loading: boolean;
    token: string;
    otp: IOTP;
    error: string;
}

const initialState: IAuthState = {
    loading: false,
    token: '',
    otp: {
        mobileNumber: '',
        token: '',
        ref: ''
    },
    error: ''
};

export const login = createAsyncThunk<IResponseLogin, IRequestLogin>('auth/login', async (body, { rejectWithValue }) => {
    try {
        const { data } = await axios.post<IResponseLogin>(ENDPOINT.LOGIN, body);
        console.log('data', data);
        cookie.set('token', data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const verifyOTP = createAsyncThunk<{ token: string }, { otp: string }>('auth/verify_otp', async (body, { rejectWithValue }) => {
    try {
        const { data } = await axios.post<IResponseVerifyOTP>(ENDPOINT.VERIFY_OTP, body);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            // state.otp = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = String(action.payload);
        });
    }
});

// export const { login } = authSlice.actions;

export default authSlice.reducer;
