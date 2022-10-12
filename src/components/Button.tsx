import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...other }) => {
    return (
        <button {...other} className={[className, 'shadow-lg bg-primary py-2 px-5 text-white rounded cursor-pointer select-none'].join(' ')}>
            {children}
        </button>
    );
};

export default Button;
