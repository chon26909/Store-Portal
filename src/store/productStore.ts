import axios from 'axios';
import zustand from 'zustand';
import { devtools } from 'zustand/middleware';
import { IProduct } from '../types/product';

interface IProductStore {
    data: IProduct[];
    fetchProducts: () => void;
}

const initialData: IProduct[] = [
    {
        title: 'T-Shirt',
        desc: "Every well-edited wardrobe is built upon a foundation of flawless basics, and Ninety Percent's T-shirt certainly qualifies. It's made from soft organic cotton-jersey in a loose shape and has a classic crew neckline. Invest in several - you'll want to wear yours with everything from denim to tailoring.",
        price: 300,
        qty: 9,
        photo: 'https://saint-laurent.dam.kering.com/m/713f3d60f6104a92/eCom-554302Y2ZJ21000_A.jpg?v=1'
    },
    {
        title: 'Bag',
        desc: 'A lightweight, eco-friendly bag that folds up into a compact size. This product cannot be returned.',
        price: 450,
        qty: 1,
        photo: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/432655/item/goods_01_432655.jpg?width=1600&impolicy=quality_75'
    },
    {
        title: 'Sneaker',
        desc: "VELLORE Men's Casual Sneaker Trending Shoes",
        price: 300,
        qty: 5,
        photo: 'https://m.media-amazon.com/images/I/71qFb2FIz5L._UL1500_.jpg'
    }
];

const productStore = zustand(
    devtools<IProductStore>(
        (set) => ({
            data: [],
            fetchProducts: async () => {
                set({ data: initialData });
            }
        }),
        { name: 'product' }
    )
);

export default productStore;
