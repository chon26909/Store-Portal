import { FC } from 'react';
import LoadingIcon from './LoadingIcon';

interface ITable {
    children: JSX.Element[];
    loading: boolean;
}

const Table: FC<ITable> = ({ children, loading }) => {
    return (
        <div className='min-h-[500px] overflow-x-auto bg-white rounded overflow-hidden border-[1px] border-[#ddd] relative'>
            <table className='w-full border-gray'>{children}</table>
            <OverlayLoading loading={loading} />
        </div>
    );
};

export const TableHeader: FC<{ children: JSX.Element[] }> = ({ children }) => {
    return (
        <thead className='text-white text-left bg-primary'>
            <tr className='[&>th]:px-5 [&>th]:py-2'>{children}</tr>
        </thead>
    );
};

export const TableBody: FC<{ children: JSX.Element[] }> = ({ children }) => <tbody>{children}</tbody>;

export const TableRow: FC<{ children: JSX.Element[] }> = ({ children }) => {
    return <tr className='[&>td]:px-5 [&>td]:py-3 border-b-[#f2f2f2] border-b-[1px] even:bg-[#f4f4f4] hover:bg-[#f3f3f3]'>{children}</tr>;
};

export const TableHead: FC<{ children: any; className?: string }> = ({ children, className }) => <th className={className}>{children}</th>;
export const TableColumn: FC<{ children: any; className?: string }> = ({ children, className }) => <td className={className}>{children}</td>;

const OverlayLoading: FC<{ loading: boolean }> = ({ loading }) => {
    if (loading) {
        return (
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000030] flex items-center justify-center select-none cursor-progress'>
                <div className='flex flex-col items-center'>
                    <LoadingIcon />
                    <div className='text-white'>กำลังโหลดข้อมูล</div>
                </div>
            </div>
        );
    }
    return <div></div>;
};

export default Table;
