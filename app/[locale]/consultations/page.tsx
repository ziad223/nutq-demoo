'use client';

import React, { useState } from 'react';
import Container from '@/components/shared/formcomponents/Container';
import { FaChevronLeft, FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Table from '@/components/shared/reusableComponents/Table';
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('consultations');
    const [searchTerm, setSearchTerm] = useState('');

    const columns = [
        { label: '#', key: 'id' },
        { label: t('name'), key: 'name' },
        { label: t('phone'), key: 'phone' },
        { label: t('city'), key: 'city' },
        { label: t('address'), key: 'address' },
        { label: t('message'), key: 'message' },
        { label: t('status'), key: 'status' },
        { label: t('actions'), key: 'actions' },
    ];

    const rawData = [
        {
            id: '1',
            name: 'محمد أحمد',
            phone: '01001234567',
            city: 'القاهرة',
            address: 'شارع التحرير',
            message: 'أحتاج إلى استشارة طبية عاجلة.',
            status: 'قيد الانتظار',
            actions: (
                <div className="flex items-center gap-2 justify-center">
                    <button className="text-white text-xs p-1 rounded bg-[#8e44ad]">
                        <FaEye />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#09adce]">
                        <FaEdit />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#dc3545]">
                        <FaTrash />
                    </button>
                </div>
            ),
        },
        {
            id: '2',
            name: 'أميرة حسن',
            phone: '01007654321',
            city: 'الإسكندرية',
            address: 'محطة الرمل',
            message: 'استفسار بخصوص نتائج التحاليل.',
            status: 'تم التواصل',
            actions: (
                <div className="flex items-center gap-2 justify-center">
                    <button className="text-white text-xs p-1 rounded bg-[#8e44ad]">
                        <FaEye />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#09adce]">
                        <FaEdit />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#dc3545]">
                        <FaTrash />
                    </button>
                </div>
            ),
        },
        {
            id: '3',
            name: 'علي مصطفى',
            phone: '0111222333',
            city: 'المنصورة',
            address: 'حي الجامعة',
            message: 'طلب استشارة خاصة بالأطفال.',
            status: 'قيد الانتظار',
            actions: (
                <div className="flex items-center gap-2 justify-center">
                    <button className="text-white text-xs p-1 rounded bg-[#8e44ad]">
                        <FaEye />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#09adce]">
                        <FaEdit />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#dc3545]">
                        <FaTrash />
                    </button>
                </div>
            ),
        },
        {
            id: '4',
            name: 'سارة محمد',
            phone: '0122333444',
            city: 'طنطا',
            address: 'شارع الجيش',
            message: 'استشارة نفسية عاجلة.',
            status: 'تم التواصل',
            actions: (
                <div className="flex items-center gap-2 justify-center">
                    <button className="text-white text-xs p-1 rounded bg-[#8e44ad]">
                        <FaEye />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#09adce]">
                        <FaEdit />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#dc3545]">
                        <FaTrash />
                    </button>
                </div>
            ),
        },
        {
            id: '5',
            name: 'خالد عبد الله',
            phone: '0100555666',
            city: 'أسيوط',
            address: 'وسط البلد',
            message: 'مشكلة صحية مزمنة.',
            status: 'قيد الانتظار',
            actions: (
                <div className="flex items-center gap-2 justify-center">
                    <button className="text-white text-xs p-1 rounded bg-[#8e44ad]">
                        <FaEye />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#09adce]">
                        <FaEdit />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#dc3545]">
                        <FaTrash />
                    </button>
                </div>
            ),
        },
        {
            id: '6',
            name: 'نهى سعيد',
            phone: '0111888999',
            city: 'الجيزة',
            address: 'شارع الهرم',
            message: 'طلب متابعة دورية.',
            status: 'تم التواصل',
            actions: (
                <div className="flex items-center gap-2 justify-center">
                    <button className="text-white text-xs p-1 rounded bg-[#8e44ad]">
                        <FaEye />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#09adce]">
                        <FaEdit />
                    </button>
                    <button className="text-white text-xs p-1 rounded bg-[#dc3545]">
                        <FaTrash />
                    </button>
                </div>
            ),
        },
    ];

    const filteredData = rawData.filter((item) => {
        const search = searchTerm.toLowerCase();
        return (
            item.name.toLowerCase().includes(search) ||
            item.city.toLowerCase().includes(search) ||
            item.address.toLowerCase().includes(search)
        );
    });

    return (
        <Container>
            <div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full gap-4">
                    <h2 className="text-xl font-bold">{t('title')}</h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <button className="bg-[#09adce] text-white px-5 py-1 flex items-center gap-1 rounded-sm">
                            <FaPlus />
                            <span>{t('add')}</span>
                        </button>
                        <button className="bg-gray-500 text-white px-5 py-1 flex items-center gap-1 rounded-sm">
                            <span>{t('back')}</span>
                            <FaChevronLeft />
                        </button>
                    </div>
                </div>

                <div className="bg-white p-5 mt-10 rounded-[10px]">
                    <div className="bg-[#fff3cd] p-5 rounded-[10px] text-[#000] text-sm">
                        {t('infoText')}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-5">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-[360px] outline-none h-[40px] px-5 border border-gray-300 rounded-[5px]"
                            placeholder={t('searchPlaceholder')}
                        />
                        <select className="w-full sm:w-[160px] outline-none h-[40px] px-5 border border-gray-300 rounded-[5px]">
                            <option>{t('allStatus')}</option>
                            <option>{t('pending')}</option>
                            <option>{t('contacted')}</option>
                        </select>
                    </div>

                    <Table columns={columns} data={filteredData} />
                </div>
            </div>
        </Container>
    );
};

export default page;
