import { ExoticComponent, FC } from 'react';
import WidgetSummary from '../components/WidgetSummary';

const DashboardPage = () => {
    return (
        <div>
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={1200} className='bg-primary' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={200} className='bg-red' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={500} className='bg-green' />
            <WidgetSummary title='ผู้ใช้งานทั้งหมด' count={500} className='bg-yellow' />
        </div>
    );
};

export default DashboardPage;
