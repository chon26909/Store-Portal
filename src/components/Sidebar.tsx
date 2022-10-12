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
            name: 'ภาพรวม',
            path: '/dashboard',
            icon: <i className='fa-solid fa-gauge' />
        },
        {
            name: 'สินค้า',
            path: '/product',
            icon: <i className='fa-solid fa-box' />
        },
        {
            name: 'ข้อมูลลูกค้า',
            path: '/customer',
            icon: <i className='fa-solid fa-users' />
        },
        {
            name: 'คำสั่งซื้อ',
            path: '/order',
            icon: <i className='fa-solid fa-box-open' />
        },
        {
            name: 'ประวัติการซื้อ',
            path: '/history',
            icon: <i className='fa-solid fa-clock-rotate-left' />
        },
        {
            name: 'ผู้ดูแล',
            path: '/manage-user',
            icon: <i className='fa-solid fa-user' />
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
