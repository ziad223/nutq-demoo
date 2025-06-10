// page.tsx
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import React from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Page = () => {
    const columns: Column[] = [
        { label: 'ID', key: 'id' },
        { label: 'Clinic Name', key: 'name' },
        { label: 'Location', key: 'location' },
        { label: 'Actions', key: 'actions' },
    ];

    const data = [
        {
            id: 1,
            name: 'Smile Clinic',
            location: 'Cairo',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd]  h-[30px] text-[16px] px-2 py-1 rounded-md hover:bg-blue-200">
                        جدول جلسات الأخصائيين
                    </button>
                    <div className = 'w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#09adce] cursor-pointer'>
                    <FaEdit className="  text-white cursor-pointer text-lg " title="Edit" />
                    </div>
                    <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-red-600 cursor-pointer'>
                        <FaTrash className="text-white cursor-pointer text-sm " title="Delete" />
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            name: 'Care Clinic',
            location: 'Alexandria',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd]  h-[30px] text-[16px] px-2 py-1 rounded-md hover:bg-blue-200">
                        جدول جلسات الأخصائيين
                    </button>
                    <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#09adce] cursor-pointer'>
                        <FaEdit className="  text-white cursor-pointer text-lg " title="Edit" />
                    </div>
                    <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-red-600 cursor-pointer'>
                        <FaTrash className="text-white cursor-pointer text-sm " title="Delete" />
                    </div>
                </div>
            ),
        },

        {
            id: 2,
            name: 'Care Clinic',
            location: 'Alexandria',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd]  h-[30px] text-[16px] px-2 py-1 rounded-md hover:bg-blue-200">
                        جدول جلسات الأخصائيين
                    </button>
                    <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#09adce] cursor-pointer'>
                        <FaEdit className="  text-white cursor-pointer text-lg " title="Edit" />
                    </div>
                    <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-red-600 cursor-pointer'>
                        <FaTrash className="text-white cursor-pointer text-sm " title="Delete" />
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            name: 'Care Clinic',
            location: 'Alexandria',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd]  h-[30px] text-[16px] px-2 py-1 rounded-md hover:bg-blue-200">
                        جدول جلسات الأخصائيين
                    </button>
                    <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#09adce] cursor-pointer'>
                        <FaEdit className="  text-white cursor-pointer text-lg " title="Edit" />
                    </div>
                    <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-red-600 cursor-pointer'>
                        <FaTrash className="text-white cursor-pointer text-sm " title="Delete" />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">Clinics</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10">
                <div className="flex justify-end">
                    <button className="flex items-center gap-2 bg-[#09adce] text-white py-2 px-5 h-[40px] rounded-[10px]">
                        <span>Add</span>
                        <FaPlus />
                    </button>
                </div>

                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Page;
