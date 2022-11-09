const API_URL = import.meta.env.VITE_API_URL;

const ENDPOINT = {
    //auth
    LOGIN: `${API_URL}/auth/login`,
    VERIFY_OTP: `${API_URL}/auth/verify`,

    //product

    //customer

    //user
    CREATE_USER: `${API_URL}/user/create`
};

export default ENDPOINT;
