import { FC, useState, useEffect } from 'react';

interface IDropdown {
    options: { label: string; value: string }[];
    label: string;
    full?: boolean;
    value: string;
    onChange: (value: string) => void;
}

const SelectClass = 'w-[250px] text-[18px] mt-1 px-3 py-2 bg-white border shadow-sm border-gray_text rounded placeholder-slate-400 focus:outline-none';

const OptionClass = 'px-3 py-2 hover:bg-[#e7eefa]';

const Dropdown: FC<IDropdown> = ({ options, label, value, full, onChange }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickOpen = (e: any) => {
        e.stopPropagation();
        setShowMenu(true);
    };

    const getLable = () => {
        const result = options.find((item) => {
            return item.value === value;
        });
        return result?.label;
    };

    useEffect(() => {
        const handle = () => setShowMenu(false);
        window.addEventListener('click', handle);

        return () => window.removeEventListener('click', handle);
    }, []);

    const changeOption = (value: string) => {
        onChange(value);
    };

    return (
        <div className='my-2 w-[250px]'>
            <div>{label}</div>
            <div className='relative'>
                <div className={SelectClass} onClick={(e) => handleClickOpen(e)}>
                    <div className=''>{getLable()}</div>
                    <div className='absolute top-2 right-4'>{showMenu ? <i className='fa-solid fa-chevron-up' /> : <i className='fa-solid fa-chevron-down' />}</div>
                </div>
                {showMenu ? (
                    <div className='bg-white w-full absolute top-[45px] border shadow-lg border-gray_text'>
                        {options.map((item, index) => (
                            <div key={index} className={OptionClass} onClick={() => changeOption(item.value)}>
                                {item.label}
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Dropdown;
