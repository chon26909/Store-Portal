import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { IProduct } from '../types/product';
import Dialog from '../components/Dialog';
import ModalProductAdd from '../components/ModalProductAdd';
import Title from '../components/Title';
import productStore from '../store/productStore';
import { useAppDispatch, useAppSelector } from '../store';
import { getProducts } from '../store/slices/productsSlice';

const ProductPage = () => {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector((s) => s.products);

    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <div>
            <Title>สินค้าทั้งหมด</Title>
            <Button type='button' onClick={() => setIsOpenModalAdd(true)}>
                เพิ่มสินค้า
            </Button>
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
