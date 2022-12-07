import { ChangeEvent, FC, HTMLAttributes, useState } from 'react';
import { useAppDispatch } from '../store';
import { addProduct, getProducts } from '../store/slices/productsSlice';
import { fileToBase64 } from '../utils';
import { NUMBER_PETTERN, TEXT_PETTERN } from '../utils/regEx';
import Button from './Button';
import Dialog from './Dialog';
import ImagePicker from './ImagePicker';
import Input from './Input';
import Modal from './Modal';
import Title from './Title';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalProductAdd: FC<IModalProps> = (props) => {
    const dispatch = useAppDispatch();

    const { isOpen, onClose } = props;

    const [isOpenConfirm, setIsOpenConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputPrice, setInputPrice] = useState('0');
    const [inputQty, setInputQty] = useState('0');
    const [inputPicture, setInputPicture] = useState<File | undefined>();

    const onSubmit = async () => {
        setLoading(true);
        const data = {
            name: inputName,
            description: inputDescription,
            price: Number(inputPrice),
            qty: Number(inputQty),
            picture: (await fileToBase64(inputPicture as File)) as string
        };

        const { payload }: any = await dispatch(addProduct(data));
        const message = payload.message;
        if (message === 'created') {
            setLoading(false);
            dispatch(getProducts());
            onClose();
        }
    };

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = [...value].map((c) => (TEXT_PETTERN.test(c) ? c : c.replace(c, ''))).join('');
        setInputName(value);
    };

    const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = [...value].map((c) => (TEXT_PETTERN.test(c) ? c : c.replace(c, ''))).join('');
        setInputDescription(value);
    };

    const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = [...value].map((c) => (NUMBER_PETTERN.test(c) ? c : c.replace(c, ''))).join('');
        setInputPrice(value);
    };

    const onChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value = [...value].map((c) => (NUMBER_PETTERN.test(c) ? c : c.replace(c, ''))).join('');
        setInputQty(value);
    };

    return (
        <Modal isOpen={isOpen} loading={loading}>
            <Title>เพิ่มสินค้า</Title>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <Input type='text' label='ชื่อสินค้า' placeholder='' value={inputName} onChange={onChangeName} />
                    <Input type='text' label='รายละเอียดสินค้า' placeholder='' value={inputDescription} onChange={onChangeDescription} />
                    <Input type='text' label='ราคา' placeholder='' value={inputPrice} onChange={onChangePrice} />
                    <Input type='text' label='จำนวน' placeholder='' value={inputQty} onChange={onChangeQty} />
                </div>
                <div>
                    <div>รูปสินค้า</div>
                    <div>
                        <ImagePicker
                            className='h-[300px] w-[100%]'
                            onChange={(file) => {
                                setInputPicture(file);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-0 p-7 w-full'>
                <div className='flex justify-end'>
                    <Button className='mr-3 bg-tranperent text-black' onClick={() => setIsOpenConfirm(true)}>
                        ยกเลิก
                    </Button>
                    <Button onClick={() => onSubmit()}>เพิ่มสินค้า</Button>
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
