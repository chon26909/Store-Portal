import { FC } from 'react';
import CustomersPage from './pages/CustomersPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ManageUserPage from './pages/ManageUserPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';

interface IRoutesType {
    [key: string]: { path: string; element: FC }[];
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
            element: DashboardPage
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
