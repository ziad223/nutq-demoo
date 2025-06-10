// page.tsx
import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';

const Page = () => {
    const columns: Column[] = [
        { label: '#', key: 'number' },
        { label: 'name', key: 'name' },
        { label: 'operations', key: 'operations' },
    ];

    const data = [
        {
            number: 1,
            name: 'تحليل سلوك',
            operations: 'تعديل | حذف',
        },
        {
            number: 2,
            name: 'تنمية مهارات',
            operations: 'تعديل | حذف',
        },
        {
            number: 3,
            name: 'تخاطب',
            operations: 'تعديل | حذف',
        },
    ];

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">Financial Aid Table</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Page;
