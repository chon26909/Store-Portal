import { FC } from 'react';
import styled from 'styled-components';
import { IProduct } from '../types/product';

interface ICardProductProps extends IProduct {
    className?: string;
}

const CardProduct: FC<ICardProductProps> = (props) => {
    return (
        <div className='bg-white p-4 border-[#e8e8e8] rounded-lg shadow-xl cursor-pointer hover:scale-105'>
            <Photo src={props.photo} />
            <div className='font-bold text-lg'>{props.title}</div>
            <div className='text-grey_text'>{props.desc.length ? props.desc.substring(0, 50) + '...' : props.desc }</div>
            <div className='text-md'>ราคา {props.price} บาท</div>
            <div className='text-md'>คงเหลือ {props.qty} ชิ้น</div>
        </div>
    );
};

export default CardProduct;

const Photo = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
`;
