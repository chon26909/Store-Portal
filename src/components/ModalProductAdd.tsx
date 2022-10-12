import { FC, useState } from 'react';
import Button from './Button';
import Dialog from './Dialog';
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
            <Button onClick={() => setIsOpenConfirm(true)}>ยกเลิก</Button>
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
