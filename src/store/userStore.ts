import zustand from 'zustand';
import { IUser } from '../types/user';

interface IUserStore {
    data: IUser[];
    loading: boolean;
    fetchData: () => void;
}

const userStore = zustand<IUserStore>()((set) => ({
    data: [],
    loading: true,
    fetchData: () => {
        setTimeout(() => {
            set(() => ({
                loading: false,
                data: [
                    {
                        email: 'chon@gmail.com',
                        role: 'admin'
                    },
                    {
                        email: 'chon@gmail.com',
                        role: 'admin'
                    },
                    {
                        email: 'chon@gmail.com',
                        role: 'admin'
                    },
                    {
                        email: 'chon@gmail.com',
                        role: 'admin'
                    },
                    {
                        email: 'chon@gmail.com',
                        role: 'admin'
                    }
                ]
            }));
        }, 2000);
    }
}));

export default userStore;
