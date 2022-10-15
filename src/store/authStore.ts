import axios from 'axios';
import zustand from 'zustand';
import { persist } from 'zustand/middleware';
import API from './api';

interface IAuthStore {
    token: string;
    login: (body: IRequestLogin) => void;
}

interface IRequestLogin {
    email: string;
    password: string;
}

export interface IAuthResponse {
    message: string;
    token: string;
}

const authStore = zustand(
    persist<IAuthStore>((set) => ({
        token: '',
        login: (body: { email: string; password: string }) => {
            const data = axios.post(API.LOGIN, body);
            console.log('data', data);
        }
    }))
);

export default authStore;
