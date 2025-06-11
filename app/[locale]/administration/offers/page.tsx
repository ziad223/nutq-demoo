import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaPlus, FaEdit, FaTrash, FaPrint } from 'react-icons/fa';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
    const t = await getTranslations('offers');

    const columns: Column[] = [
        { label: '#', key: 'service_number' },
        { label: t('columns.productName'), key: 'name' },
        { label: t('columns.start'), key: 'clinic' },
        { label: t('columns.end'), key: 'price' },
        { label: t('columns.status'), key: 'status' },
        { label: t('columns.rate'), key: 'rate' },
        { label: t('columns.discountRatio'), key: 'discount_ratio' },
        { label: t('columns.actions'), key: 'actions' },
    ];

    const data = [
        {
            service_number: 1,
            name: t('services.speechTherapy'),
            clinic: t('clinics.smile'),
            price: `200 ${t('common.egp')}`,
            status: t('status.active'),
            rate: '4.5',
            discount_ratio: '10%',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        {t('actions.financialReport')}
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
        {
            service_number: 2,
            name: t('services.skillsDevelopment'),
            clinic: t('clinics.care'),
            price: `180 ${t('common.egp')}`,
            status: t('status.inactive'),
            rate: '4.2',
            discount_ratio: '5%',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        {t('actions.financialReport')}
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
        {
            service_number: 3,
            name: t('services.behaviorAnalysis'),
            clinic: t('clinics.future'),
            price: `250 ${t('common.egp')}`,
            status: t('status.active'),
            rate: '4.8',
            discount_ratio: '15%',
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        {t('actions.financialReport')}
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">{t('title')}</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                    <div className="flex items-center justify-between w-full gap-2">
                        <button className="flex items-center gap-2 bg-[#198754] text-white py-2 px-5 h-[40px] rounded-[10px]">
                            <span>{t('actions.addOffer')}</span>
                            <FaPlus />
                        </button>
                        <button className="flex items-center gap-2 bg-[#ffc107] text-white py-2 px-2 h-[40px] rounded-[10px]">
                            <FaPrint title={t('actions.print')} />
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