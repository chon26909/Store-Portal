import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/modal.module.scss';

interface IModalProps {
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
    // onClose: (state: boolean) => void;
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

export default Modal;
