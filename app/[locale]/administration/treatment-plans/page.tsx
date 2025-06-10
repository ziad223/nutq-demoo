'use client'
import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaPlus, FaEdit, FaTrash, FaPrint } from 'react-icons/fa';

const columns: Column[] = [
    { label: '#', key: 'service_number' },
    { label: 'اسم الخطة', key: 'name' },
    { label: 'مدة الخطة بالأيام', key: 'duration' },
    { label: 'الجلسات لليوم الواحد', key: 'sessions_per_day' },
    { label: 'عدد الجلسات', key: 'total_sessions' },
    { label: 'سعر الخطة', key: 'price' },
    { label: 'العيادة', key: 'clinic' },
    { label: 'المشتركين', key: 'subscribers' },
    { label: 'الإجراءات', key: 'actions' },
];

// إنشاء بيانات وهمية كثيرة
const generateData = () => {
    return Array.from({ length: 50 }, (_, i) => ({
        service_number: i + 1,
        name: `خطة ${i + 1}`,
        duration: 30 + (i % 5) * 10,
        sessions_per_day: 1 + (i % 3),
        total_sessions: 10 + i,
        price: `${100 + i * 5} EGP`,
        clinic: `عيادة ${i % 4 === 0 ? 'الأمل' : i % 4 === 1 ? 'الفرحة' : i % 4 === 2 ? 'السعادة' : 'المستقبل'}`,
        subscribers: Math.floor(Math.random() * 100),
        actions: (
            <div className="flex items-center justify-center gap-3">
                <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                    تقرير مالي
                </button>
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#09adce] cursor-pointer">
                    <FaEdit className="text-white text-lg" title="تعديل" />
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                    <FaTrash className="text-white text-sm" title="حذف" />
                </div>
            </div>
        ),
    }));
};

const Page = () => {
    const allData = generateData();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(allData.length / itemsPerPage);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedData = allData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">خطط العلاج</h2>

            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                    <select className="w-full md:w-[252px] px-2 rounded-[5px] h-[40px] border outline-none">
                        <option>العيادة</option>
                        <option>تحليل سلوك تطبيقي</option>
                        <option>دراسة الحالة</option>
                        <option>تخاطب</option>
                        <option>تنمية مهارات</option>
                        <option>عيادات التقييم</option>
                    </select>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 bg-[#09adce] text-white py-2 px-5 h-[40px] rounded-[10px]">
                            <span>إضافة خطة</span>
                            <FaPlus />
                        </button>
                        <button className="flex items-center gap-2 bg-[#ffc107] text-white py-2 px-2 h-[40px] rounded-[10px]">
                            <FaPrint />
                        </button>
                    </div>
                </div>

                <div className="mt-5">
                    <Table columns={columns} data={paginatedData} />
                </div>

                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handleChangePage(i + 1)}
                            className={`px-3 py-1 rounded border ${currentPage === i + 1 ? 'bg-[#09adce] text-white' : 'bg-white text-black'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
