import { FC } from 'react';
interface IModalProps {
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
    modalClassName?: string;
    bodyClassName?: string;
    loading?: boolean;
}

const Modal: FC<IModalProps> = ({ children, isOpen, modalClassName, bodyClassName }) => {
    if (!isOpen) return null;
    return (
        <div
            className={`fixed inset-0 z-50 bg-black/50 
                        flex items-center justify-center 
                        overflow-x-hidden 
                        focus:outline outline-none`}
        >
            <div
                className={`${modalClassName}
                            mx-auto 
                            h-3/4 w-[1000px] 
                            md:h-full md:w-full 
                            lg:h-4/5 lg:w-4/6

                            ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                            relative rounded-md md:rounded-none
                            transition duration-300
                            bg-white
                            `}
            >
                <div className={[bodyClassName, ' h-full overflow-y-auto '].join(' ')}>{children}</div>

                {/* <div
                    className={`
                        rounded-md
                        
                        bg-white 
                        h-full
                        transition
                        duration-300
                        overflow-hidden
                        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                    `}
                >
                    <div className=''>
                        <div className=' bg-white '>{children}</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Modal;

// import { FC, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import Button from './Button';
// import styled from 'styled-components';
// import LoadingIcon from './LoadingIcon';

// interface IModalProps {
//     children: JSX.Element | JSX.Element[];
//     isOpen: boolean;
//     className?: string;
//     loading?: boolean;
// }

// const Modal: FC<IModalProps> = (props) => {
//     const { children, isOpen, className, loading } = props;

//     useEffect(() => {
//         if (isOpen) {
//             document.getElementsByTagName('body')[0].style.overflow = 'hidden';
//         }
//     }, []);

//     return (
//         <AnimatePresence>
//             {isOpen ? (
//                 <ModalStyle>
//                     <motion.div className='ModalBackdrop' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                         <motion.div className={[className, 'ModalContentWrapper'].join(' ')} initial={{ scale: 0 }} animate={{ scale: 1 }}>
//                             <motion.div className='body'>
//                                 <div className='in-body'>{children}</div>
//                                 <OvarlayLoading overlay={loading} />
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 </ModalStyle>
//             ) : null}
//         </AnimatePresence>
//     );
// };

// const OvarlayLoading: FC<{ overlay: boolean | undefined }> = ({ overlay }) => {
//     if (overlay) {
//         return (
//             <OvarlayLoadingStyle>
//                 <LoadingIcon />
//             </OvarlayLoadingStyle>
//         );
//     }
//     return <div></div>;
// };

// const ModalStyle = styled.div`
//     .ModalBackdrop {
//         position: fixed;
//         height: 100vh;
//         width: 100vw;
//         top: 0;
//         left: 0;
//         background-color: rgba(0, 0, 0, 0.6);
//     }
//     .ModalContentWrapper {
//         position: fixed;
//         max-width: 950px;
//         height: 600px;
//         background-color: white;
//         margin: auto;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;

//         border-radius: 7px;
//         box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

//         .body {
//             position: relative;
//             height: 100%;

//             .in-body {
//                 padding: 1.8rem;
//             }
//         }
//     }
//     .ModalDialog {
//         position: fixed;
//         max-width: 435px;
//         height: 240px;
//         background-color: white;
//         margin: auto;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         padding: 1rem;
//         border-radius: 7px;
//         box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
//     }
// `;

// const OvarlayLoadingStyle = styled.div`
//     border-radius: 7px;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.3);
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     pointer-events: fill;
//     user-select: none;
// `;

// interface IFooterButton {
//     onConfirm: (data: any) => void;
//     onCancal: () => void;
//     confirm: string;
//     cancel: string;
// }

// export const FooterButton: FC<IFooterButton> = ({ confirm, cancel, onConfirm, onCancal }) => {
//     return (
//         <div className='absolute bottom-0 right-0 p-7 w-full'>
//             <div className='flex justify-end'>
//                 <Button className='mr-3 bg-tranperent text-black' onClick={() => onCancal()}>
//                     {cancel}
//                 </Button>
//                 <Button onClick={() => onConfirm('data form')}>{confirm}</Button>
//             </div>
//         </div>
//     );
// };

// export default Modal;
