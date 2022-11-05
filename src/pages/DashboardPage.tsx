import { useState } from 'react';
import Switch from '../components/Switch';
import WidgetSummary from '../components/WidgetSummary';

const DashboardPage = () => {
    const [toggle, settoggle] = useState(false);
    return (
        <div>
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={1200} className='bg-primary' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={200} className='bg-red' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={500} className='bg-green' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={500} className='bg-yellow' />
            <Switch
                checked={toggle}
                onClick={() => {
                    settoggle(!toggle);
                }}
            />
        </div>
    );
};

export default DashboardPage;
