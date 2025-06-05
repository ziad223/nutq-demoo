'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const columns: Column[] = [
    { label: 'Number', key: 'number' },
    { label: 'Name', key: 'name' },
    { label: 'Phone', key: 'phone' },
    { label: 'Nationality', key: 'nationality' },
    { label: 'Gender', key: 'gender' },
    { label: 'Age', key: 'age' },
    { label: 'Civil No.', key: 'civilNumber' },
    { label: 'Paid Bills', key: 'paidBills' },
    { label: 'Unpaid Bills', key: 'unpaidBills' },
    { label: 'Last Visit', key: 'lastVisit' },
    { label: 'Operations', key: 'actions' },
];

interface PatientData {
    number: number;
    name: string;
    phone: string;
    nationality: string;
    gender: string;
    age: number;
    civilNumber: string;
    paidBills: string;
    unpaidBills: string;
    lastVisit: string;
    actions: React.ReactNode;
}

const sampleData: PatientData[] = [
    {
        number: 1,
        name: 'Ahmed Ali',
        phone: '0123456789',
        nationality: 'Egyptian',
        gender: 'Male',
        age: 32,
        civilNumber: '1234567890',
        paidBills: '500 EGP',
        unpaidBills: '100 EGP',
        lastVisit: '2025-06-01',
        actions: <button className="text-blue-500 underline">View</button>,
    },
    {
        number: 2,
        name: 'Nader Ali',
        phone: '0123456789',
        nationality: 'Egyptian',
        gender: 'Male',
        age: 25,
        civilNumber: '1234567890',
        paidBills: '500 EGP',
        unpaidBills: '100 EGP',
        lastVisit: '2025-06-01',
        actions: <button className="text-blue-500 underline">View</button>,
    },
    {
        number: 3,
        name: 'Soha Kamal',
        phone: '0123456789',
        nationality: 'Egyptian',
        gender: 'Male',
        age: 32,
        civilNumber: '1234567890',
        paidBills: '500 EGP',
        unpaidBills: '100 EGP',
        lastVisit: '2025-06-01',
        actions: <button className="text-blue-500 underline">View</button>,
    },
    {
        number: 4,
        name: 'Karma Saad',
        phone: '0123456789',
        nationality: 'Egyptian',
        gender: 'Male',
        age: 32,
        civilNumber: '1234567890',
        paidBills: '500 EGP',
        unpaidBills: '100 EGP',
        lastVisit: '2025-06-01',
        actions: <button className="text-blue-500 underline">View</button>,
    },
    {
        number: 5,
        name: 'Ziad Abdalla',
        phone: '0123456789',
        nationality: 'Egyptian',
        gender: 'Male',
        age: 32,
        civilNumber: '1234567890',
        paidBills: '500 EGP',
        unpaidBills: '100 EGP',
        lastVisit: '2025-06-01',
        actions: <button className="text-blue-500 underline">View</button>,
    }
];

const page: React.FC = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const locale = useLocale();

    const filteredData = sampleData.filter(patient =>
        patient.name.toLowerCase().includes(search.toLowerCase())
    );

    const tableData = filteredData.map((patient) => ({
        ...patient,
    }));

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="border border-gray-300 text-black outline-none rounded-md px-4 py-2 w-full md:w-[250px]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Link
                    href = {`/${locale}/patients/add`}
                    className="bg-[#09adce] text-white px-6 py-2 rounded-md hover:bg-blue-400"
                >
                    + Add Patient
                </Link>
            </div>

            <Table columns={columns} data={tableData} />
        </div>
    );
};

export default page;
