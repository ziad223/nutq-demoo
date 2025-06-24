'use client';

import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaBars, FaAngleRight, FaPenToSquare, FaTrashCan, FaPlus, FaList } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

const AccountsTree = () => {
    const t = useTranslations('accounting');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpanded(prev => (prev === id ? null : id));
    };

    // Columns
    const columns: Column[] = [
        { label: t('columns.id'), key: 'id' },
        { label: t('columns.name'), key: 'name' },
        { label: t('columns.created_at'), key: 'created_at' },
        { label: t('columns.sub_sections'), key: 'kids_count' },
        { label: t('columns.specialist'), key: 'doctor' },
        { label: t('columns.actions'), key: 'actions' },
    ];

    // Table Data
    const data = [
        {
            id: '1',
            name: t('sidebar.items.assets'),
            created_at: '2024-06-01',
            kids_count: <button className="btn btn-sm bg-blue-600 text-white px-2 py-1 rounded">2</button>,
            doctor: t('doctors.fatima'),
            actions: (
                <div className="flex justify-center items-center gap-1">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        <FaPenToSquare title={t('buttons.edit')} />
                    </button>
                    <button className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        <FaTrashCan title={t('buttons.delete')} />
                    </button>
                </div>
            ),
        },
        {
            id: '2',
            name: t('sidebar.items.liabilities'),
            created_at: '2024-06-02',
            kids_count: <button className="btn btn-sm bg-blue-600 text-white px-2 py-1 rounded">1</button>,
            doctor: t('doctors.mohamed'),
            actions: (
                <div className="flex justify-center items-center gap-1">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        <FaPenToSquare title={t('buttons.edit')} />
                    </button>
                    <button className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        <FaTrashCan title={t('buttons.delete')} />
                    </button>
                </div>
            ),
        },
        {
            id: '3',
            name: t('sidebar.items.capital'),
            created_at: '2024-06-03',
            kids_count: <button className="btn btn-sm bg-blue-600 text-white px-2 py-1 rounded">1</button>,
            doctor: t('doctors.sara'),
            actions: (
                <div className="flex justify-center items-center gap-1">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        <FaPenToSquare title={t('buttons.edit')} />
                    </button>
                    <button className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        <FaTrashCan title={t('buttons.delete')} />
                    </button>
                </div>
            ),
        },
        {
            id: '4',
            name: t('sidebar.items.expenses'),
            created_at: '2024-06-04',
            kids_count: <button className="btn btn-sm bg-blue-600 text-white px-2 py-1 rounded">2</button>,
            doctor: t('doctors.ali'),
            actions: (
                <div className="flex justify-center items-center gap-1">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        <FaPenToSquare title={t('buttons.edit')} />
                    </button>
                    <button className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        <FaTrashCan title={t('buttons.delete')} />
                    </button>
                </div>
            ),
        },
        {
            id: '5',
            name: t('sidebar.items.revenues'),
            created_at: '2024-06-05',
            kids_count: <button className="btn btn-sm bg-blue-600 text-white px-2 py-1 rounded">1</button>,
            doctor: t('doctors.nada'),
            actions: (
                <div className="flex justify-center items-center gap-1">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        <FaPenToSquare title={t('buttons.edit')} />
                    </button>
                    <button className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        <FaTrashCan title={t('buttons.delete')} />
                    </button>
                </div>
            ),
        },
        {
            id: '6',
            name: t('sidebar.items.purchases'),
            created_at: '2024-06-06',
            kids_count: <button className="btn btn-sm bg-blue-600 text-white px-2 py-1 rounded">1</button>,
            doctor: t('doctors.kareem'),
            actions: (
                <div className="flex justify-center items-center gap-1">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        <FaPenToSquare title={t('buttons.edit')} />
                    </button>
                    <button className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        <FaTrashCan title={t('buttons.delete')} />
                    </button>
                </div>
            ),
        },
    ];

    // Sidebar Items
    const sidebarItems = [
        {
            id: 'assets',
            label: t('sidebar.items.assets'),
            links: [t('sidebar.sub_items.asset1'), t('sidebar.sub_items.asset2')]
        },
        {
            id: 'liabilities',
            label: t('sidebar.items.liabilities'),
            links: [t('sidebar.sub_items.liability1')]
        },
        {
            id: 'capital',
            label: t('sidebar.items.capital'),
            links: [t('sidebar.sub_items.capital1')]
        },
        {
            id: 'expenses',
            label: t('sidebar.items.expenses'),
            links: [t('sidebar.sub_items.expense1'), t('sidebar.sub_items.expense2')]
        },
        {
            id: 'revenues',
            label: t('sidebar.items.revenues'),
            links: [t('sidebar.sub_items.revenue1')]
        },
        {
            id: 'purchases',
            label: t('sidebar.items.purchases'),
            links: [t('sidebar.sub_items.purchase1')]
        },
    ];

    return (
        <section className="main-section">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Sidebar */}
                    <nav className={`sidebar-app w-full md:w-64 bg-white shadow rounded-lg p-4 transition-transform ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                        <button onClick={() => setSidebarOpen(false)} className="mb-4 text-red-500 md:hidden">
                            {t('buttons.close')}
                        </button>
                        <div className="mb-3">
                            <div className="flex items-center gap-2 mb-5">
                                <FaList />
                                <span className="text-sm font-medium">{t('sidebar.title')}</span>
                            </div>
                            <button onClick={() => setModalOpen(true)} className="w-full text-white bg-green-600 px-3 py-2 text-sm rounded">
                                {t('sidebar.add_section')}
                            </button>
                        </div>
                        <div className="space-y-2">
                            {sidebarItems.map(item => (
                                <div key={item.id}>
                                    <div
                                        onClick={() => toggleExpand(item.id)}
                                        className="bg-gray-100 rounded p-2 flex items-center justify-between cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FaList />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                        <FaAngleRight className={`transform transition-transform ${expanded === item.id ? 'rotate-90' : ''}`} />
                                    </div>
                                    {expanded === item.id && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            {item.links.map((link, i) => (
                                                <a key={i} href="#" className="block text-sm text-gray-600 hover:underline">
                                                    {link}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold">{t('account_tree')}</h2>
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="md:hidden text-gray-600"
                            >
                                <FaBars />
                            </button>
                        </div>

                        <div className="bg-white p-4 rounded shadow">
                            <div className="flex justify-between items-center mb-3">
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="bg-[#09adce] text-white px-4 py-2 text-sm rounded"
                                >
                                    {t('buttons.add_new_section')} <FaPlus className="inline ml-1" />
                                </button>
                            </div>

                            <Table columns={columns} data={data} />
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {modalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4">
                            <div className="flex justify-between items-center border-b pb-2 mb-4">
                                <h4 className="text-lg font-semibold">{t('modal.add_new_section')}</h4>
                                <button onClick={() => setModalOpen(false)} className="text-red-500">
                                    {t('buttons.close')}
                                </button>
                            </div>
                            <div className="text-sm text-gray-600 mb-4">
                                {t('modal.employee_section_note')}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder={t('placeholders.name')} className="border p-2 rounded w-full" />
                                <select className="border p-2 rounded w-full">
                                    <option>{t('placeholders.select_main_source')}</option>
                                </select>
                                <select className="border p-2 rounded w-full">
                                    <option>{t('placeholders.select_doctor')}</option>
                                </select>
                                <input type="number" placeholder={t('placeholders.section_cost')} className="border p-2 rounded w-full" />
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" /> {t('labels.depreciable')}
                                </label>
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-200 rounded">
                                    {t('buttons.cancel')}
                                </button>
                                <button className="px-4 py-2 bg-green-600 text-white rounded">
                                    {t('buttons.save')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AccountsTree;