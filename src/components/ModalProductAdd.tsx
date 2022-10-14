import { FC, useState } from 'react';
import Button from './Button';
import Dialog from './Dialog';
import Input from './Input';
import Modal from './Modal';
import Title from './Title';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalProductAdd: FC<IModalProps> = (props) => {
    const { isOpen, onClose } = props;

    const [isOpenConfirm, setIsOpenConfirm] = useState(false);

    return (
        <Modal isOpen={isOpen}>
            <Title>เพิ่มสินค้า</Title>
            <div>
                <Input type='text' label='ชื่อสินค้า' placeholder='' />
            </div>
            <div>
                <Input type='text' label='รายละเอียดสินค้า' placeholder='' />
            </div>
            <div>
                <Input type='text' label='ราคา' placeholder='' />
            </div>
            <div>
                <Input type='text' label='จำนวน' placeholder='' />
            </div>

            <div className='absolute bottom-0 right-0 p-7 w-full'>
                <div className='flex justify-end'>
                    <Button className='mr-3 bg-tranperent text-black' onClick={() => setIsOpenConfirm(true)}>
                        ยกเลิก
                    </Button>
                    <Button onClick={() => setIsOpenConfirm(true)}>เพิ่มสินค้า</Button>
                </div>
            </div>
            <Dialog
                icon='warning'
                isOpen={isOpenConfirm}
                title='ต้องการยกเลิกหรือไม่?'
                message='โปรดตรวจสอบความถูกต้อง'
                onConfirm={() => {
                    setIsOpenConfirm(false);
                    onClose();
                }}
                onCancel={() => setIsOpenConfirm(false)}
            />
        </Modal>
    );
};

export default ModalProductAdd;
