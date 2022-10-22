import { FC } from 'react';

interface IDropdown {
    options: { label: string; value: string }[];
    label: string;
    full?: boolean;
}

const SelectClass = 'text-[18px] mt-1 px-3 py-2 bg-white border shadow-sm border-gray_text rounded placeholder-slate-400 focus:outline-none';

const OptionClass = 'py-5';

const Dropdown: FC<IDropdown> = ({ options, label, full }) => {
    return (
        <div className='my-2'>
            <label htmlFor='text' className='block'>
                {label}
            </label>
            <select className={[full ? 'w-full' : 'w-[250px]', SelectClass].join(' ')}>
                {options.map((option, i) => (
                    <option className={OptionClass} key={i} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
