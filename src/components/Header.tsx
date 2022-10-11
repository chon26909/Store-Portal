import { FC } from 'react';

const username = 'HiChon';

const Header: FC = () => {
    return (
        <div className='bg-white shadow flex items-center px-3 justify-between h-[50px]'>
            <div className='text-2xl font-bold ml-2'>Store</div>
            <div className='rounded px-5 py-1 bg-grey font-bold text-sm'>{username}</div>
        </div>
    );
};

export default Header;
