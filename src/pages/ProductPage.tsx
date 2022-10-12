import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import CardProduct from '../components/CardProduct';
import Dialog from '../components/Dialog';
import ModalProductAdd from '../components/ModalProductAdd';
import Title from '../components/Title';
import productStore from '../store/productStore';

const ProductPage: FC = () => {
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

    const { data, fetchProducts } = productStore();

    useEffect(() => {
        fetchProducts();
    }, []);

    const onSubmitAddProduct = () => {
        console.log('add product');
    };

    return (
        <>
            <Title>สินค้าทั้งหมด</Title>
            <Button type='button' onClick={() => setIsOpenModalAdd(true)}>
                เพิ่มสินค้า
            </Button>
            <ProductList>{data && data.map((item, i) => <CardProduct {...item} key={i} />)}</ProductList>
            <ModalProductAdd isOpen={isOpenModalAdd} onClose={() => setIsOpenModalAdd(false)} />
        </>
    );
};

export default ProductPage;

const ProductList = styled.div`
    margin: 1.2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
`;
