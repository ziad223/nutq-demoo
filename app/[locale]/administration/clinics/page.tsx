import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddPatientModal from './AddPatientModal';

const Page = async () => {
    const t = await getTranslations('patients');

    const columns: Column[] = [
        { label: t('columns.id'), key: 'id' },
        { label: t('columns.name'), key: 'name' },
        { label: t('columns.location'), key: 'location' },
        { label: t('columns.actions'), key: 'actions' },
    ];

    const data = [
        {
            id: 1,
            name: t('dataa.patient1'),
            location: t('locations.cairo'),
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-2 py-1 rounded-md hover:bg-blue-500">
                        {t('viewSessions')}
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            name: t('dataa.patient2'),
            location: t('locations.alexandria'),
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-2 py-1 rounded-md hover:bg-blue-500">
                        {t('viewSessions')}
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#09adce] cursor-pointer">
                        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">{t('clinics')}</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10">
                <div className="flex justify-end">
                    <AddPatientModal />
                </div>
                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Page;
