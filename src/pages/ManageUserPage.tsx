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
import { IUser, USER_STATUS } from '../types/user';

const ManageUserPage: FC = () => {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector((s) => s.users);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [dataEdit, setDataEdit] = useState<IUser | undefined>();

    const columns = ['No.', 'ชื่อ นามสกุล', 'อีเมล', 'สิทธิการเข้าถึง', 'สถานะ', 'แก้ไข'];

    const role: any = {
        admin: 'ผู้ดูแลระบบ',
        sale: 'เจ้าหน้าที่ฝ่ายขาย'
    };

    const onEditRow = (data: IUser) => {
        setDataEdit(data);
        setIsOpenModal(true);
    };

    const onAddUser = () => {
        setDataEdit(undefined);
        setIsOpenModal(true);
    };

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div>
            <div className='flex justify-between mb-2'>
                <Title>ข้อมูลผู้ใช้งานระบบ และสิทธิการเข้าถึง</Title>
                <Button onClick={() => onAddUser()}>เพิ่มผู้ใช้งาน</Button>
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
                            <TableColumn className='w-[60px]'>{i + 1}</TableColumn>
                            <TableColumn>{row.firstname + ' ' + row.lastname}</TableColumn>
                            <TableColumn>{row.email}</TableColumn>
                            <TableColumn className='w-[200px]'>{role[row.role]}</TableColumn>
                            <TableColumn className='w-[200px]'>
                                <UserStatus status={row.user_status} />
                            </TableColumn>
                            <TableColumn className='w-[70px] text-center'>
                                <i className='fas fa-pen-to-square text-primary text-[18px] p-2 cursor-pointer' onClick={() => onEditRow(row)} />
                            </TableColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ModalUser isOpen={isOpenModal} dataForEdit={dataEdit} onClose={() => setIsOpenModal(false)} />
        </div>
    );
};

const UserStatus: FC<{ status: string }> = ({ status }) => {
    const dot = 'w-[15px] h-[15px] rounded-full mr-2';
    const style = 'py-2 inline-block text-[16px] flex items-center';
    if (status === USER_STATUS.ENABLED) {
        return (
            <div className={[style, 'text-green'].join(' ')}>
                <div className={[dot, 'bg-green '].join(' ')}>{'  '}</div>
                <div>เปิดการใช้งาน</div>
            </div>
        );
    } else if (status === USER_STATUS.DISABLED) {
        return (
            <div className={[style, 'text-red'].join(' ')}>
                <div className={[dot, 'bg-red '].join(' ')}>{'  '}</div>
                <div> ปิดการใช้งาน</div>
            </div>
        );
    } else if (status === USER_STATUS.SUSPENDED) {
        return (
            <div className={[style, 'text-yellow'].join(' ')}>
                <div className={[dot, 'bg-yellow '].join(' ')}>{'  '}</div>
                <div>ระงับการใช้งาน</div>
            </div>
        );
    }
    return <div></div>;
};

const FilterUser = () => {
    const [inputRole, setInputRole] = useState('');
    const options = [
        {
            label: 'สิทธิผู้ใช้งาน',
            value: ''
        },
        {
            label: 'ผู้ดูแลระบบ',
            value: 'admin'
        },
        {
            label: 'เจ้าหน้าที่ฝ่ายขาย',
            value: 'sale'
        }
    ];
    return (
        <div>
            <div className='my-3'>
                <Input type='text' label='ชื่อจริง' placeholder='' />
                <Input type='text' label='อีเมล' placeholder='' />
                <Select label='สิทธิผู้ใช้งาน' value='' onChange={setInputRole} options={options} />
            </div>
            <div className='my-3'>
                <Button>ค้นหา</Button>
                <Button className='bg-tranperent shadow-none text-black'>รีเซ็ต</Button>
            </div>
        </div>
    );
};

const ModalUser: FC<{ isOpen: boolean; dataForEdit?: IUser; onClose: Function }> = ({ isOpen, dataForEdit, onClose }) => {
    const dispath = useAppDispatch();
    const { loading } = useAppSelector((s) => s.users);

    const [inputFirstname, setInputFirstname] = useState('');
    const [inputLastname, setInputLastname] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputRole, setInputRole] = useState('');

    const options = [
        {
            label: 'สิทธิผู้ใช้งาน',
            value: ''
        },
        {
            label: 'ผู้ดูแลระบบ',
            value: 'admin'
        },
        {
            label: 'เจ้าหน้าที่ฝ่ายขาย',
            value: 'sale'
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

    useEffect(() => {
        if (dataForEdit) {
            const { firstname, lastname, email, role } = dataForEdit;
            setInputFirstname(firstname);
            setInputLastname(lastname);
            setInputEmail(email);
            setInputRole(role);
        } else {
            setInputFirstname('');
            setInputLastname('');
            setInputEmail('');
            setInputRole('');
        }
    }, [dataForEdit]);

    return (
        <Modal isOpen={isOpen} loading={loading}>
            <Title>{dataForEdit ? 'แก้ไขข้อมูล' : 'เพิ่มผู้ใช้งาน'}</Title>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <Input type='text' label='Firstname' value={inputFirstname} onChange={(e) => setInputFirstname(e.target.value)} />
                    <Input type='text' label='Lastname' value={inputLastname} onChange={(e) => setInputLastname(e.target.value)} />
                    <Input type='text' label='Email' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
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
