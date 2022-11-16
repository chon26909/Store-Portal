const API_URL = import.meta.env.VITE_API_URL;

const ENDPOINT = {
    //auth
    LOGIN: `${API_URL}/auth/login`,
    VERIFY_OTP: `${API_URL}/auth/verify`,

    //product
    GET_PRODUCTS: `${API_URL}/product`,
    ADD_PRODUCT: `${API_URL}/product/create`,
    //customer

    //user
    GET_USERS: `${API_URL}/users`,
    ADD_USER: `${API_URL}/users/create`
};

export default ENDPOINT;
