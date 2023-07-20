import { useState } from 'react';
import Switch from '../components/Switch';
import WidgetSummary from '../components/WidgetSummary';
import InputFile from '../components/InputFile';
import Chart from '../components/Chart';
import Modal from '../components/Modal';

const DashboardPage = () => {
    const [toggle, settoggle] = useState(false);
    const [file, setFile] = useState<File>();
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
            <Modal isOpen={true} modalClassName='p-5'>
                <div>
                    {[...Array(100)].map(() => (
                        <div>A</div>
                    ))}
                </div>
            </Modal>
        </div>
    );
};

export default DashboardPage;
