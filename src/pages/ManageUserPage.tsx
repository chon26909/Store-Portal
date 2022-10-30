import { FC, useEffect, useState } from 'react';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import Modal from '../components/Modal';
import Table, { TableBody, TableColumn, TableHead, TableHeader, TableRow } from '../components/Table';
import Title from '../components/Title';
import userStore from '../store/userStore';

const ManageUserPage: FC = () => {
    const { data, loading, fetchData } = userStore();
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(true);

    const columns = ['No.', 'Email', 'Role'];

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='flex justify-between mb-2'>
                <Title>ข้อมูลผู้ใช้งานระบบ และสิทธิการเข้าถึง</Title>
                <Button>เพิ่มผู้ใช้งาน</Button>
            </div>
            <FilterUser />
            <Table loading={loading}>
                <TableHeader>
                    {columns.map((column, i) => (
                        <TableHead key={i}>{column}</TableHead>
                    ))}
                </TableHeader>
                <TableBody>
                    {data.map((row, i) => (
                        <TableRow key={i}>
                            <TableColumn>{i + 1}</TableColumn>
                            <TableColumn>{row.email}</TableColumn>
                            <TableColumn>{row.role}</TableColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ModalCreateUser isOpen={isOpenModalCreate} />
        </div>
    );
};

const FilterUser = () => {
    return (
        <div>
            <div className='my-3'>
                <Input type='text' label='Email' placeholder='' />
            </div>
            <div className='my-3'>
                <Button>ค้นหา</Button>
                <Button className='bg-tranperent shadow-none text-black'>รีเซ็ต</Button>
            </div>
        </div>
    );
};

const ModalCreateUser: FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const [inputRole, setinputRole] = useState('Admin');

    const options = [
        {
            label: 'Admin',
            value: 'Admin'
        },
        {
            label: 'Sale',
            value: 'Sale'
        }
    ];

    return (
        <Modal isOpen={isOpen}>
            <Title>เพิ่มผู้ใช้งาน</Title>
            <div>
                <Input type='text' label='Email' />
                <Dropdown placeholder='เลือกสิทธิการใขช้งาน' value={inputRole} onChange={setinputRole} options={options} label='สิทธิผู้ใช้งาน' />
                {inputRole}
            </div>
        </Modal>
    );
};

export default ManageUserPage;
