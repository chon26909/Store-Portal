import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import MainLayout from './layouts/MainLayout';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.public.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                ))}
                <Route element={<MainLayout />}>
                    {routes.private.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.element />} />
                    ))}
                    <Route path='*' element={<PageNotFound />} />
                </Route>
                <Route index element={<Navigate to='dashboard' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
