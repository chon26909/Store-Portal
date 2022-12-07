import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import cookie from 'js-cookie';

const ProtectedRoute: FC = () => {
    const token = cookie.get('token');

    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to='/login' />;
    }
};

export default ProtectedRoute;
