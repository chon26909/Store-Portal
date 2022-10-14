import { FC, useEffect } from 'react';
import Table, { TableBody, TableHeader, TableRow } from '../components/Table';
import Title from '../components/Title';

const ManageUserPage: FC = () => {
    const columns = ['No.', 'Email', 'Role'];

    let dataSource = [
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
    ];

    useEffect(() => {}, []);

    return (
        <div>
            <Title>ข้อมูลผู้ใช้งานระบบ และสิทธิการเข้าถึง</Title>
            <FilterUser />
            <Table loading={false}>
                <TableHeader>
                    {columns.map((column, i) => (
                        <th key={i}>{column}</th>
                    ))}
                </TableHeader>
                <TableBody>
                    {dataSource.map((row, i) => (
                        <TableRow>
                            <td key={i}>{i + 1}</td>
                            <td key={i}>{row.email}</td>
                            <td key={i}>{row.role}</td>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

const FilterUser = () => {
    return <div></div>;
};

export default ManageUserPage;
