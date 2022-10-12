import { FC } from 'react';
import Button from './Button';
import Modal from './Modal';
import Title from './Title';

interface IModalProps {
    isOpen: boolean;
    onClose: (state: boolean) => void;
}

const ModalProductAdd: FC<IModalProps> = (props) => {
    const { isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen}>
            <Title>เพิ่มสินค้า</Title>
            <Button onClick={() => onClose(false)}>ยกเลิก</Button>
        </Modal>
    );
};

export default ModalProductAdd;
