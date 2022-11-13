import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import cookie from 'js-cookie';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = cookie.get('token');
    config.headers!.Authorization = 'Bearer ' + token;
    return config;
};
const onRequestError = (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err);
};
axios.interceptors.request.use(onRequest, onRequestError);

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};
const onResponseError = (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err);
};
axios.interceptors.response.use(onResponse, onResponseError);
