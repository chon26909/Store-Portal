import { FC } from 'react';
import { NavLink } from 'react-router-dom';
// import { useAppSelector } from '../hooks';
// import Logo from './Logo';
import styles from '../styles/sidebar.module.scss';
import { ISidebar } from '../types/nav';

const Sidebar: FC = () => {
    // const { sidebar } = useAppSelector((state) => state);

    // const menu_sidebar = [
    //     {
    //         name: 'Dashboard',
    //         path: '/',
    //         icon: <i className='fa-solid fa-gauge' />
    //     },
    //     {
    //         name: 'Sensors',
    //         path: '/sensors',
    //         icon: <i className='fa-solid fa-temperature-half' />
    //     },
    //     {
    //         name: 'Light',
    //         path: '/light',
    //         icon: <i className='fa-solid fa-lightbulb' />
    //     },
    //     {
    //         name: 'Battery',
    //         path: '/battery',
    //         icon: <i className='fa-solid fa-car-battery' />
    //     }
    // ];

    const menu_sidebar: ISidebar[] = [
        {
            name: 'Dashboard',
            path: 'dashboard'
        },
        {
            name: 'Product',
            path: 'product'
        },
        {
            name: 'Manage User',
            path: 'manage-user'
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
                                console.log(item.path, isActive);
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

// import { FC } from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import styles from '../styles/sidebar.module.scss';
// import { ISidebar } from '../types/nav';

// const sidebar: ISidebar[] = [
//     {
//         name: 'Dashboard',
//         path: '/'
//     },
//     {
//         name: 'Product',
//         path: '/product'
//     },
//     {
//         name: 'Manage User',
//         path: '/manage-user'
//     }
// ];

// const Sidebar: FC = () => {
//     return (
//         <nav className='fixed w-[200px] bg-primary h-full'>
//             <div className='text-center font-bold text-2xl m-2 text-white'>POS</div>
//             <List>
//                 {sidebar.map((item, i) => {
//                     return (
//                         <NavLink
//                             to={item.path}
//                             className={({ isActive }) => {
//                                 console.log(isActive);
//                                 return ['bg-red', isActive ? 'font-thin' : ''].join(' ');
//                             }}
//                             key={i}
//                         >
//                             <Item>
//                                 <div></div>
//                                 <div>{item.name}</div>
//                             </Item>
//                         </NavLink>
//                     );
//                 })}
//             </List>
//         </nav>
//     );
// };

// export default Sidebar;

// const List = styled.div`
//     padding: 5px;
// `;

// const Item = styled.div`
//     font-size: 18px;
//     color: white;
//     padding-left: 25px;
//     width: 100%;
//     display: block;
//     border-top-left-radius: 30px;
//     border-bottom-left-radius: 30px;
//     position: relative;
//     display: grid;
//     grid-template-columns: 40px 1fr;
//     align-items: center;
//     height: 50px;

//     &.Active {
//         color: var(--primary-color);
//         background-color: white;

//         &::before {
//             content: '';
//             width: 30px;
//             height: 30px;
//             background: transparent;
//             position: absolute;
//             top: -30px;
//             right: 0px;
//             border-radius: 50%;
//             box-shadow: 25px 25px 0 10px white;
//         }

//         &::after {
//             content: '';
//             width: 30px;
//             height: 30px;
//             background: transparent;
//             position: absolute;
//             bottom: -30px;
//             right: 0px;
//             border-radius: 50%;
//             box-shadow: 25px -25px 0 10px white;
//         }
//     }

//     &:not(.Active):hover {
//         padding-left: 28px;
//         transition: all ease-in-out 0.2s;
//         background-color: rgba(255, 255, 255, 0.15);
//     }

//     & > div:nth-child(1) {
//         text-align: center;

//         i {
//             font-size: 26px;
//         }
//     }
// `;
