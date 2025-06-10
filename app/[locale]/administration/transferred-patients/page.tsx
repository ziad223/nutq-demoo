// page.tsx
import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaPlus, FaEdit, FaTrash, FaPrint } from 'react-icons/fa';

const Page = () => {
    const columns: Column[] = [
        { label: 'Service Number', key: 'service_number' },
        { label: 'Name', key: 'name' },
        { label: 'Clinic', key: 'clinic' },
        { label: 'Price', key: 'price' },
        { label: 'Operations', key: 'actions' },
    ];

    const data = [
        {
            service_number: 1,
            name: 'جلسة تخاطب',
            clinic: 'Smile Clinic',
            price: '200 EGP',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        Financial report
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title="Edit" />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title="Delete" />
                    </div>
                </div>
            ),
        },
        {
            service_number: 2,
            name: 'جلسة تنمية مهارات',
            clinic: 'Care Clinic',
            price: '180 EGP',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                    Financial report
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title="Edit" />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title="Delete" />
                    </div>
                </div>
            ),
        },
        {
            service_number: 3,
            name: 'جلسة تحليل سلوك',
            clinic: 'Future Clinic',
            price: '250 EGP',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        Financial report
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title="Edit" />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title="Delete" />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">Services</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                    <select className="w-full md:w-[252px] px-2 rounded-[5px] h-[40px] border outline-none">
                        <option>clinic</option>
                        <option>تحليل سلوك تطبيقي</option>
                        <option>دراسة الحالة</option>
                        <option>تخاطب</option>
                        <option>تنمية مهارات</option>
                        <option>عيادات التقييم</option>
                    </select>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 bg-[#09adce] text-white py-2 px-5 h-[40px] rounded-[10px]">
                            <span>Add Service</span>
                            <FaPlus />
                        </button>
                        <button className="flex items-center gap-2 bg-[#ffc107] text-white py-2 px-2 h-[40px] rounded-[10px]">
                            <FaPrint />
                        </button>
                    </div>
                </div>

                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Page;
