import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import authStore from '../store/authStore';
import ROLE_USER from '../utils/roleUser';

interface IAuthRole {
    allowedRoles: ROLE_USER[];
}

// const AuthRole: FC<IAuthRole> = ({ allowedRoles }) => {
//     const auth = authStore();
//     return allowedRoles.includes(auth.role) ? <Outlet /> : <Navigate to='/login' state={{ from: useLocation() }} />;
// };

// export default AuthRole;
