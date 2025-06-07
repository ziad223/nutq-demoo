// app/[locale]/patients/page.tsx (Server Component)
import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import Link from 'next/link';
import { FaFileInvoiceDollar, FaWhatsapp } from 'react-icons/fa';
import { FaClipboardUser, FaMessage } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
import { GoClockFill } from "react-icons/go";
import { BiTransfer } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchPatients from './SearchPatients';

interface LayoutProps {
    params: { locale: string };
}

interface PatientData extends Record<string, React.ReactNode> {
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

const columns: Column[] = [
    { label: 'Number', key: 'number' },
    { label: 'Name', key: 'name' },
    { label: 'Phone', key: 'phone' },
    { label: 'Nationality', key: 'nationality' },
    { label: 'Gender', key: 'gender' },
    { label: 'Age', key: 'age' },
    { label: 'Civil No.', key: 'civilNumber' },
    { label: 'Medical No.', key: 'medicalNumber' },
    { label: 'Paid Bills', key: 'paidBills' },
    { label: 'Unpaid Bills', key: 'unpaidBills' },
    { label: 'Last Visit', key: 'lastVisit' },
    { label: 'Operations', key: 'actions' },
];

const getPatientsData = (): PatientData[] => [
    {
        number: 1,
        name: 'Ahmed Ali',
        phone: '0123456789',
        nationality: 'Egyptian',
        gender: 'Male',
        age: 32,
        civilNumber: '1234567890',
        medicalNumber: 'MED12345',
        paidBills: '500 EGP',
        unpaidBills: '100 EGP',
        lastVisit: '2025-06-01',
        actions: (
            <div className="flex gap-2 items-center">
                <Link href='/patient-report' className="bg-blue-500 text-white p-2 rounded-lg">
                    Patient <span className='lg:block'>Report</span>
                </Link>
                <a href="https://wa.me/96612312220239" target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 hover:bg-green-600 w-9 h-9 flex items-center justify-center text-white p-2 rounded-full shadow-md">
                        <FaWhatsapp size={20} />
                    </button>
                </a>
                {/* ... other buttons ... */}
            </div>
        ),
    },
    // ... other patient data ...
];

const Page = async ({ params }: LayoutProps) => {
    const { locale } = params;
    const patientsData = getPatientsData();

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <SearchPatients />
                <Link
                    href={`/${locale}/patients/add`}
                    className="bg-[#09adce] text-white px-6 py-2 rounded-md hover:bg-blue-400 whitespace-nowrap"
                >
                    + Add Patient
                </Link>
            </div>

            <Table columns={columns} data={patientsData} />
        </div>
    );
};

export default Page;