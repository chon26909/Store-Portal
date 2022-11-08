import { FC } from 'react';
import CustomersPage from './pages/CustomersPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ManageUserPage from './pages/ManageUserPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';
import ROLE_USER from './utils/roleUser';

interface IRoutesType {
    [key: string]: { path: string; role?: ROLE_USER[]; element: FC }[];
}

const routes: IRoutesType = {
    public: [
        {
            path: '/login',
            element: LoginPage
        }
    ],
    private: [
        {
            path: '/dashboard',
            element: DashboardPage,
            role: [ROLE_USER.ADMIN, ROLE_USER.OPERATOR]
        },
        {
            path: '/products',
            element: ProductPage
        },
        {
            path: '/product/:id',
            element: ProductDetailPage
        },
        {
            path: '/customers',
            element: CustomersPage
        },
        {
            path: '/role',
            element: ManageUserPage
        }
    ]
};
export default routes;
