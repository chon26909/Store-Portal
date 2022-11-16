import { ChangeEvent, FC, useState } from 'react';

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
        const files = e.target.files;

        if (files) {
            onChange(files[0]);
            setImage(URL.createObjectURL(files[0]));
        }
    };

    return (
        <div className={[className, 'w-[300px] h-[300px] mt-3 rounded-lg border-gray shadow overflow-hidden'].join(' ')}>
            <label htmlFor='image picker'></label>
            <input type='file' className='hidden' ref={(input) => (inputFile = input)} accept='image/png, image/jpeg' onChange={(e) => onChangeImage(e)} />
            <div className={[className, 'h-[300px] w-[300px] cursor-pointer flex justify-center items-center bg-gray'].join(' ')} onClick={() => onPick()}>
                {image.length > 0 ? (
                    <div className='relative'>
                        <div>
                            <img className={[className, 'h-[300px] w-[300px] object-cover'].join(' ')} src={image} alt='preview' />
                        </div>
                        <div className='hidden hover:block'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-center bg-primary select-none cursor-pointer'>เปลี่ยนรูปภาพ</div>
                        </div>
                    </div>
                ) : (
                    <div className=''>เลือกรูปภาพ</div>
                )}
            </div>
        </div>
    );
};

export default ImagePicker;
