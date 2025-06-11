'use client'
import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaPlus, FaEdit, FaTrash, FaPrint } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('treatmentPlans');
    const columns: Column[] = [
        { label: '#', key: 'service_number' },
        { label: t('columns.planName'), key: 'name' },
        { label: t('columns.duration'), key: 'duration' },
        { label: t('columns.sessionsPerDay'), key: 'sessions_per_day' },
        { label: t('columns.totalSessions'), key: 'total_sessions' },
        { label: t('columns.price'), key: 'price' },
        { label: t('columns.clinic'), key: 'clinic' },
        { label: t('columns.subscribers'), key: 'subscribers' },
        { label: t('columns.actions'), key: 'actions' },
    ];

    const generateData = () => {
        return Array.from({ length: 50 }, (_, i) => ({
            service_number: i + 1,
            name: `${t('data.plan')} ${i + 1}`,
            duration: 30 + (i % 5) * 10,
            sessions_per_day: 1 + (i % 3),
            total_sessions: 10 + i,
            price: `${100 + i * 5} ${t('common.egp')}`,
            clinic: `${t('clinics.prefix')} ${i % 4 === 0 ? t('clinics.hope') : i % 4 === 1 ? t('clinics.joy') : i % 4 === 2 ? t('clinics.happiness') : t('clinics.future')}`,
            subscribers: Math.floor(Math.random() * 100),
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
        }));
    };

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
            <h2 className="font-bold text-xl">{t('title')}</h2>

            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                    <select className="w-full md:w-[252px] px-2 rounded-[5px] h-[40px] border outline-none">
                        <option>{t('filters.clinic')}</option>
                        <option>{t('filters.behaviorAnalysis')}</option>
                        <option>{t('filters.caseStudy')}</option>
                        <option>{t('filters.speechTherapy')}</option>
                        <option>{t('filters.skillsDevelopment')}</option>
                        <option>{t('filters.evaluationClinics')}</option>
                    </select>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 bg-[#09adce] text-white py-2 px-5 h-[40px] rounded-[10px]">
                            <span>{t('actions.addPlan')}</span>
                            <FaPlus />
                        </button>
                        <button className="flex items-center gap-2 bg-[#ffc107] text-white py-2 px-2 h-[40px] rounded-[10px]">
                            <FaPrint title={t('actions.print')} />
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