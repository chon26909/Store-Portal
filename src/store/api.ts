const API_URL = import.meta.env.VITE_API_URL;

const ENDPOINT = {
    //auth
    LOGIN: `${API_URL}/auth/login`,
    VERIFY_OTP: `${API_URL}/auth/verify`,

    //product

    //customer

    //user
    GET_USERS: `${API_URL}/users`,
    ADD_USER: `${API_URL}/users/create`
};

export default ENDPOINT;
