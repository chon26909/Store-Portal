import { ChangeEvent, createRef, FC, useRef, useState } from 'react';

interface IImagePicker {
    className?: string;
    onChange: (file?: File) => void;
}

const ImagePicker: FC<IImagePicker> = ({ className, onChange }) => {
    const [image, setImage] = useState('');

    let inputFile: HTMLInputElement | null;

    const onPick = () => {
        inputFile?.click();
    };

    const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files;

        if (image) {
            onChange(image[0]);
            setImage(URL.createObjectURL(image[0]));
        }
    };

    return (
        <div className='mt-3 rounded-lg border-gray shadow overflow-hidden'>
            <input type='file' className='hidden' ref={(input) => (inputFile = input)} accept='image/png, image/jpeg' onChange={(e) => onChangeImage(e)} />
            <div className={[className, 'cursor-pointer min-h-[300px] flex justify-center items-center bg-gray'].join(' ')} onClick={() => onPick()}>
                {image.length > 0 ? (
                    <div>
                        <img className='object-cover' src={image} alt='preview' />
                    </div>
                ) : (
                    <div>เลือกรูปภาพ</div>
                )}
            </div>
        </div>
    );
};

export default ImagePicker;
