import { FC, useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Modal, { FooterButton } from '../components/Modal';
import Table, { TableBody, TableColumn, TableHead, TableHeader, TableRow } from '../components/Table';
import Title from '../components/Title';
import Select from '../components/Select';
import ImagePicker from '../components/ImagePicker';
import { addUser, getUsers } from '../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../store';

const ManageUserPage: FC = () => {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector((s) => s.users);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

    const columns = ['No.', 'Email', 'Role'];

    useEffect(() => {
        dispatch(getUsers());
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
    const dispath = useAppDispatch();
    const { loading } = useAppSelector((s) => s.users);
    const [inputRole, setInputRole] = useState('');
    const [inputFirstname, setInputFirstname] = useState('');
    const [inputLastname, setInputLastname] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const options = [
        {
            label: 'สิทธิผู้ใช้งาน',
            value: ''
        },
        {
            label: 'ผู้ดูแลระบบ',
            value: 'Admin'
        },
        {
            label: 'เจ้าหน้าที่ฝ่ายขาย',
            value: 'Sale'
        }
    ];

    const onSubmit = async () => {
        const data = {
            firstname: inputFirstname,
            lastname: inputLastname,
            email: inputEmail,
            role: inputRole
        };
        await dispath(addUser(data));
        onClose();
    };

    return (
        <Modal isOpen={isOpen} loading={loading}>
            <Title>เพิ่มผู้ใช้งาน</Title>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <Input type='text' label='Firstname' onChange={(e) => setInputFirstname(e.target.value)} />
                    <Input type='text' label='Lastname' onChange={(e) => setInputLastname(e.target.value)} />
                    <Input type='text' label='Email' onChange={(e) => setInputEmail(e.target.value)} />
                    <Select label='สิทธิผู้ใช้งาน' value={inputRole} onChange={setInputRole} options={options} />
                </div>
                <div className=''>
                    <div>รูปโปรไฟล์</div>
                    <div>
                        <ImagePicker className='h-[300px] w-[100%]' onChange={() => {}} />
                    </div>
                </div>
            </div>
            <FooterButton confirm='เพิ่มผู้ใช้งาน' onConfirm={onSubmit} cancel='ยกเลิก' onCancal={() => onClose()} />
        </Modal>
    );
};

export default ManageUserPage;
