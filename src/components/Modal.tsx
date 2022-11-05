import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styled from 'styled-components';

interface IModalProps {
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
}

const Modal: FC<IModalProps> = (props) => {
    const { children, isOpen } = props;
    return (
        <AnimatePresence>
            {isOpen ? (
                <ModalStyle>
                    <motion.div className='ModalDackdrop' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <motion.div className='ModalContentWrapper' initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            {children}
                        </motion.div>
                    </motion.div>
                </ModalStyle>
            ) : null}
        </AnimatePresence>
    );
};

const ModalStyle = styled.div`
    .ModalDackdrop {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .ModalContentWrapper {
        position: fixed;
        max-width: 1000px;
        height: 600px;
        background-color: white;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1.8rem;
        border-radius: 7px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    .ModalDialog {
        position: fixed;
        max-width: 435px;
        height: 240px;
        background-color: white;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1rem;
        border-radius: 7px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
`;

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
