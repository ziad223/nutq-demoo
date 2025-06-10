// page.tsx
import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaPlus, FaEdit, FaTrash, FaPrint } from 'react-icons/fa';

const Page = () => {
    const columns: Column[] = [
        { label: '#', key: 'service_number' },
        { label: 'Product name', key: 'name' },
        { label: 'start', key: 'clinic' },
        { label: 'end', key: 'price' },
        { label: 'Status', key: 'status' },
        { label: 'rate', key: 'rate' },
        { label: 'Emergence of discount ratio', key: 'discount_ratio' },
        { label: 'actions', key: 'actions' },
    ];

    const data = [
        {
            service_number: 1,
            name: 'جلسة تخاطب',
            clinic: 'Smile Clinic',
            price: '200 EGP',
            status: 'Active',
            rate: '4.5',
            discount_ratio: '10%',
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
            status: 'Inactive',
            rate: '4.2',
            discount_ratio: '5%',
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
            status: 'Active',
            rate: '4.8',
            discount_ratio: '15%',
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
            <h2 className="font-bold text-xl">Offers</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                    <div className="flex items-center justify-between w-full gap-2">
                        <button className="flex items-center gap-2 bg-[#198754] text-white py-2 px-5 h-[40px] rounded-[10px]">
                            <span>Add Offer</span>
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
