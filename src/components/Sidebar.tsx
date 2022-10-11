import { FC } from 'react';
import { NavLink } from 'react-router-dom';
// import { useAppSelector } from '../hooks';
// import Logo from './Logo';
import styles from '../styles/sidebar.module.scss';
import { ISidebar } from '../types/nav';

const Sidebar: FC = () => {
    // const { sidebar } = useAppSelector((state) => state);

    const menu_sidebar: ISidebar[] = [
        {
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            name: 'Product',
            path: '/product'
        },
        {
            name: 'Manage User',
            path: '/manage-user'
        }
    ];

    return (
        <div className={[styles.Sidebar, true ? styles.SidebarActive : ''].join(' ')}>
            <div className={styles.Menu}>
                {menu_sidebar.map((item: any, index: any) => {
                    return (
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => {
                                return [styles.Item, isActive ? styles.Active : ''].join(' ');
                            }}
                            key={index}
                        >
                            <div>{item.icon}</div>

                            <div>{item.name}</div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
