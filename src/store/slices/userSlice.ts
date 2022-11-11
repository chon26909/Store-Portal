import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../types/user';
import ENDPOINT from '../api';

interface IUserStore {
    loading: boolean;
    data: IUser[] | [];
}

interface IRequestAddUser {
    firstname: string;
    lastname: string;
    email: string;
    role: string;
}
interface IResponseUsers {
    message: string;
    data: IUser[];
}

export const addUser = createAsyncThunk<void, IRequestAddUser>('user/add', async (body, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(ENDPOINT.ADD_USER, body);
        console.log('data', data);
    } catch (error) {
        console.log('error', error);
        rejectWithValue(error);
    }
});

export const getUsers = createAsyncThunk<IResponseUsers['data']>('user/get', async () => {
    try {
        const {
            data: { data }
        } = await axios.get(ENDPOINT.GET_USERS);
        console.log('data', data);
        return data;
    } catch (error) {
        console.log('error', error);
        // rejectWithValue(error);
    }
});

const initialState: IUserStore = {
    loading: false,
    data: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
            state.data = [];
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(addUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addUser.fulfilled, (state) => {
            state.loading = false;
        });
    }
});

export default userSlice.reducer;
