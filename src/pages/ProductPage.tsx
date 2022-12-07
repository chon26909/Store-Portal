import { FC, useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { IProduct } from '../types/product';
import Dialog from '../components/Dialog';
import Title from '../components/Title';
import { useAppDispatch, useAppSelector } from '../store';
import { getProducts, addProduct } from '../store/slices/productsSlice';
import { fileToBase64 } from '../utils';
import { NUMBER_PETTERN, TEXT_PETTERN } from '../utils/regEx';
import ImagePicker from '../components/ImagePicker';
import Input from '../components/Input';
import Modal from '../components/Modal';

const ProductPage = () => {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector((s) => s.products);

    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <div>
            <div className='flex justify-between'>
                <Title>สินค้าทั้งหมด</Title>
                <Button type='button' onClick={() => setIsOpenModalAdd(true)}>
                    เพิ่มสินค้า
                </Button>
            </div>
            <ProductFilter />

            <ProductList>{data && data.map((item, i) => <CardProduct {...item} key={i} />)}</ProductList>
            <ModalProductAdd isOpen={isOpenModalAdd} onClose={() => setIsOpenModalAdd(false)} />
        </div>
    );
};

export default ProductPage;

const ProductList = styled.div`
    margin: 1.2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
`;

//---------------------------------------------------------------- //

interface ICardProductProps extends IProduct {
    className?: string;
}

const CardProduct: FC<ICardProductProps> = (props) => {
    return (
        <div className='bg-white p-4 border-[#e8e8e8] rounded-lg shadow-xl cursor-pointer hover:scale-105'>
            <Photo src={props.picture} />
            <div className='font-bold text-lg'>{props.name}</div>
            <div className='text-gray_text'>{props.description.length ? props.description.substring(0, 50) + '...' : props.description}</div>
            <div className='text-md'>ราคา {props.price} บาท</div>
            <div className='text-md'>คงเหลือ {props.qty} ชิ้น</div>
        </div>
    );
};

const Photo = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
`;

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

const ProductFilter = () => {
    return (
        <div className='my-3'>
            <Input type='text' label='ชื่อสินค้า รายละเอียดสินค้า' placeholder='' />
            <div className='my-2'>
                <Button type='button'>ค้นหา</Button>
            </div>
        </div>
    );
};
