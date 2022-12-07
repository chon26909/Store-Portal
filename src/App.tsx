import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import MainLayout from './layouts/MainLayout';
import PageNotFound from './pages/PageNotFound';
import authStore from './store/authStore';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    const auth = authStore();

    return (
        <BrowserRouter>
            <Routes>
                {routes.public.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                ))}
                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        {routes.private.map((route) => {
                            return <Route key={route.path} path={route.path} element={<route.element />} />;
                        })}
                        <Route path='*' element={<PageNotFound />} />
                    </Route>
                    <Route index element={<Navigate to='dashboard' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
