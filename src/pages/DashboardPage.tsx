import { useState } from 'react';
import Switch from '../components/Switch';
import WidgetSummary from '../components/WidgetSummary';
import InputFile from '../components/InputFile';
import Chart from '../components/Chart';
import Modal, { ModalHeader } from '../components/Modal';
import Button from '../components/Button';

const DashboardPage = () => {
    const [toggle, settoggle] = useState(false);
    const [file, setFile] = useState<File>();

    const handleCloseModal = () => settoggle(false);

    return (
        <div>
            {/* <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={1200} className='bg-primary' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={200} className='bg-red' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={500} className='bg-green' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={500} className='bg-yellow' />
            <Switch
                checked={toggle}
                onClick={() => {
                    settoggle(!toggle);
                }}
            /> */}

            <InputFile onChange={(value) => setFile(value)} acceptFile={['CSV']} />
            {/* <Chart /> */}

            <Button onClick={() => settoggle(true)}>เพิ่มสินค้า</Button>

            <Modal isOpen={toggle} bodyClassName=''>
                <ModalHeader>
                    <div>เพิ่มสินค้า</div>
                </ModalHeader>
                <div className='h-[450px] p-5'>
                    <div className='overflow-y-auto h-full'>
                        {[...Array(100)].map((_, index) => (
                            <div key={index} className='bg-primary p-3 mb-3'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, atque quisquam mollitia laborum molestias voluptatum
                                sint? Accusantium distinctio doloremque earum nisi. Asperiores, officiis quibusdam earum tempore fugiat iusto deleniti
                                temporibus!{' '}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='h-[80px] p-5'>
                    <div className='flex justify-end'>
                        <Button className='bg-white text-black mr-5' onClick={handleCloseModal}>
                            ยกเลิก
                        </Button>
                        <Button onClick={handleCloseModal}>เพิ่ม</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DashboardPage;
