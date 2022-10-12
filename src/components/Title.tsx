import { Attributes, FC } from 'react';

interface TitleProps {
    className?: string;
    children?: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
    return <div className={[className, 'text-2xl py-3 font-bold'].join(' ')}>{children}</div>;
};

export default Title;
