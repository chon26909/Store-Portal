import { FC, useEffect } from 'react';
import Table, { TableBody, TableHeader, TableRow } from '../components/Table';
import Title from '../components/Title';
import userStore from '../store/userStore';

const ManageUserPage: FC = () => {
    const { data, loading, fetchData } = userStore();

    const columns = ['No.', 'Email', 'Role'];

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Title>ข้อมูลผู้ใช้งานระบบ และสิทธิการเข้าถึง</Title>
            <FilterUser />
            <Table loading={loading}>
                <TableHeader>
                    {columns.map((column, i) => (
                        <th key={i}>{column}</th>
                    ))}
                </TableHeader>
                <TableBody>
                    {data.map((row, i) => (
                        <TableRow key={i}>
                            <td>{i + 1}</td>
                            <td>{row.email}</td>
                            <td>{row.role}</td>
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
