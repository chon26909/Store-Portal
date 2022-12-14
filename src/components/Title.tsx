import { Attributes, FC } from 'react';

interface TitleProps {
    className?: string;
    children?: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
    return <div className={[className, 'text-2xl my-1 font-bold'].join(' ')}>{children}</div>;
};

export default Title;
