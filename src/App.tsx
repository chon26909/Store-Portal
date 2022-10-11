import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import ManageUserPage from './pages/ManageUserPage';
import Input from './components/Input';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route element={<MainLayout />}>
                    <Route path='dashboard' caseSensitive element={<DashboardPage />} />
                    <Route path='manage-user' caseSensitive element={<ManageUserPage />} />
                </Route>
                <Route index element={<Navigate to='dashboard' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
