'use client'
import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const columns: Column[] = [
    { label: '#', key: 'service_number' },
    { label: 'name', key: 'name' },
    { label: 'الحساب', key: 'duration' },
    { label: 'فعال', key: 'sessions_per_day' },
    { label: 'operations ', key: 'total_sessions' },
];

const generateData = () => {
    return Array.from({ length: 4 }, (_, i) => ({
        service_number: i + 1,
        name: `خطة ${i + 1}`,
        duration: 30 + (i % 5) * 10,
        sessions_per_day: 1 + (i % 3),
        total_sessions: 10 + i,
    }));
};

const Page = () => {
    const data = generateData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">طرق الدفع</h2>

            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 bg-[#09adce] text-white py-2 px-5 h-[40px] rounded-[10px]"
                        >
                            <span>إضافة </span>
                            <FaPlus />
                        </button>
                    </div>
                </div>

                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-[90%] md:w-[400px]">
                        <h3 className="text-lg font-bold mb-4">إضافة طريقة دفع</h3>
                        <p className="mb-4">هنا يمكن وضع نموذج الإضافة أو أي محتوى آخر.</p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                إلغاء
                            </button>
                            <button className="px-4 py-2 bg-[#09adce] text-white rounded hover:bg-[#0b9ab3]">
                                حفظ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
