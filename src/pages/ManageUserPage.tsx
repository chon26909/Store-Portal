import { FC, useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Modal, { FooterButton } from '../components/Modal';
import Table, { TableBody, TableColumn, TableHead, TableHeader, TableRow } from '../components/Table';
import Title from '../components/Title';
import userStore from '../store/userStore';
import Select from '../components/Select';
import ImagePicker from '../components/ImagePicker';

const ManageUserPage: FC = () => {
    const { data, loading, fetchData } = userStore();
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

    const columns = ['No.', 'Email', 'Role'];

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='flex justify-between mb-2'>
                <Title>ข้อมูลผู้ใช้งานระบบ และสิทธิการเข้าถึง</Title>
                <Button onClick={() => setIsOpenModalCreate(true)}>เพิ่มผู้ใช้งาน</Button>
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
            <ModalCreateUser isOpen={isOpenModalCreate} onClose={() => setIsOpenModalCreate(false)} />
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

const ModalCreateUser: FC<{ isOpen: boolean; onClose: Function }> = ({ isOpen, onClose }) => {
    const [inputRole, setinputRole] = useState('');

    const options = [
        {
            label: 'สิทธิผู้ใช้งาน',
            value: ''
        },
        {
            label: 'Admin',
            value: 'Admin'
        },
        {
            label: 'Sale',
            value: 'Sale'
        }
    ];

    const onSubmit = (data: any) => {
        console.log('data from submit ', data);
        onClose();
    };

    return (
        <Modal isOpen={isOpen}>
            <Title>เพิ่มผู้ใช้งาน</Title>
            <div className='grid grid-cols-2'>
                <div>
                    <Input type='text' label='Email' />
                    <Select label='สิทธิผู้ใช้งาน' value={inputRole} onChange={setinputRole} options={options} />
                    <FooterButton confirm='เพิ่มผู้ใช้งาน' onConfirm={onSubmit} cancel='ยกเลิก' onCancal={() => onClose()} />
                </div>
                <div className='mt-2'>
                    <div>รูปโปรไฟล์</div>
                    <div>
                        <ImagePicker className='h-[300px] w-[100%]' onChange={() => {}} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ManageUserPage;
