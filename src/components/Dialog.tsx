import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/modal.module.scss';
import Button from './Button';

interface IDialogProps {
    isOpen: boolean;
    title: string;
    message?: string;
    icon?: 'success' | 'danger' | 'warning' | undefined;
    onConfirm: () => void;
    onCancel: () => void;
    // onClose: (state: boolean) => void;
}

const IconDialog = ({ icon }: { icon: IDialogProps['icon'] }) => {
    if (icon === 'success') return <i className='fas fa-circle-check text-green' />;
    else if (icon === 'warning') return <i className='fas fa-circle-exclamation text-primary ' />;
    else if (icon === 'danger') return <i className='fas fa-circle-exclamation text-red' />;
    else return <i></i>;
};

const Dialog: FC<IDialogProps> = (props) => {
    const { isOpen, title, message, icon, onConfirm, onCancel } = props;
    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div className={[styles.ModalDackdrop].join(' ')} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <motion.div className={styles.ModalDialog} initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <div className='text-center text-[55px]'>
                            <IconDialog icon={icon} />
                        </div>

                        <div className='text-center text-2xl font-bold'>{title}</div>
                        <div className='text-center'>{'' + message}</div>
                        <div className='text-center mt-3'>
                            <Button className='mx-2 px-[4rem] py-3 bg-tranperent border-grey border-[1px] box-border border=[1px] text-black' onClick={onCancel}>
                                ยกเลิก
                            </Button>
                            <Button className={[icon === 'danger' ? 'bg-red border-red' : '', 'mx-2 px-[4rem] py-3 border-primary border-[1px]'].join(' ')} onClick={onConfirm}>
                                ยืนยัน
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default Dialog;
