import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/modal.module.scss';
import Button from './Button';

interface IModalProps {
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
}

const Modal: FC<IModalProps> = (props) => {
    const { children, isOpen } = props;
    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div className={[styles.ModalDackdrop].join(' ')} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <motion.div className={styles.ModalContentWrapper} initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        {children}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

interface IFooterButton {
    onConfirm: (data: any) => void;
    onCancal: () => void;
    confirm: string;
    cancel: string;
}

export const FooterButton: FC<IFooterButton> = ({ confirm, cancel, onConfirm, onCancal }) => {
    return (
        <div className='absolute bottom-0 right-0 p-7 w-full'>
            <div className='flex justify-end'>
                <Button className='mr-3 bg-tranperent text-black' onClick={() => onCancal()}>
                    {cancel}
                </Button>
                <Button onClick={() => onConfirm('data form')}>{confirm}</Button>
            </div>
        </div>
    );
};

export default Modal;
