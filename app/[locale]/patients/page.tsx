'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import {  FaFileInvoiceDollar, FaWhatsapp } from 'react-icons/fa';
import { FaClipboardUser, FaMessage } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
import { GoClockFill } from "react-icons/go";
import { BiTransfer } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

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
        actions: (
            <div className="flex gap-2 items-center">
                <button className="bg-blue-500 text-white p-2 rounded-lg">Patient <span className = 'lg:block'>Report</span></button>
                <button className="bg-green-500 hover:bg-green-600 w-9 h-9 flex items-center justify-center text-white p-2 rounded-full shadow-md">
                    <FaWhatsapp size={20} />
                </button>
                <button className="bg-[#222] hover:bg-green-bg-[#000] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                <FaClipboardUser size={16} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaMessage size={16} /> 
                </button>
                <button className="bg-[#555] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaFileInvoiceDollar size={16} />
                </button>
                <button className="bg-[#8e44ad]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <IoEye size={20} />
                </button>
                <button className="bg-[#333] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#ffc107]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <BiTransfer size={20} />
                </button>
                <button className="bg-transparent border border-gray-700  hover:bg-gray-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px]">
                    <BsThreeDotsVertical size={20} className='text-black hover:text-white' />
                </button>
            </div>
          ),
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
        actions: (
            <div className="flex gap-2 items-center">
                <button className="bg-blue-500 text-white p-2 rounded-lg">Patient <span className='lg:block'>Report</span></button>
                <button className="bg-green-500 hover:bg-green-600 w-9 h-9 flex items-center justify-center text-white p-2 rounded-full shadow-md">
                    <FaWhatsapp size={20} />
                </button>
                <button className="bg-[#222] hover:bg-green-bg-[#000] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaClipboardUser size={16} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaMessage size={16} />
                </button>
                <button className="bg-[#555] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaFileInvoiceDollar size={16} />
                </button>
                <button className="bg-[#8e44ad]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <IoEye size={20} />
                </button>
                <button className="bg-[#333] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#ffc107]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <BiTransfer size={20} />
                </button>
                <button className="bg-transparent border border-gray-700  hover:bg-gray-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px]">
                    <BsThreeDotsVertical size={20} className='text-black hover:text-white' />
                </button>
            </div>
        ),
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
        actions: (
            <div className="flex gap-2 items-center">
                <button className="bg-blue-500 text-white p-2 rounded-lg">Patient <span className='lg:block'>Report</span></button>
                <button className="bg-green-500 hover:bg-green-600 w-9 h-9 flex items-center justify-center text-white p-2 rounded-full shadow-md">
                    <FaWhatsapp size={20} />
                </button>
                <button className="bg-[#222] hover:bg-green-bg-[#000] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaClipboardUser size={16} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaMessage size={16} />
                </button>
                <button className="bg-[#555] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaFileInvoiceDollar size={16} />
                </button>
                <button className="bg-[#8e44ad]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <IoEye size={20} />
                </button>
                <button className="bg-[#333] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#ffc107]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <BiTransfer size={20} />
                </button>
                <button className="bg-transparent border border-gray-700  hover:bg-gray-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px]">
                    <BsThreeDotsVertical size={20} className='text-black hover:text-white' />
                </button>
            </div>
        ),    },
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
        actions: (
            <div className="flex gap-2 items-center">
                <button className="bg-blue-500 text-white p-2 rounded-lg">Patient <span className = 'lg:block'>Report</span></button>
                <button className="bg-green-500 hover:bg-green-600 w-9 h-9 flex items-center justify-center text-white p-2 rounded-full shadow-md">
                    <FaWhatsapp size={20} />
                </button>
                <button className="bg-[#222] hover:bg-green-bg-[#000] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                <FaClipboardUser size={16} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaMessage size={16} /> 
                </button>
                <button className="bg-[#555] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaFileInvoiceDollar size={16} />
                </button>
                <button className="bg-[#8e44ad]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <IoEye size={20} />
                </button>
                <button className="bg-[#333] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#ffc107]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <BiTransfer size={20} />
                </button>
                <button className="bg-transparent border border-gray-700  hover:bg-gray-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px]">
                    <BsThreeDotsVertical size={20} className='text-black hover:text-white' />
                </button>
            </div>
          ),    },
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
        actions: (
            <div className="flex gap-2 items-center">
                <button className="bg-blue-500 text-white p-2 rounded-lg">Patient <span className='lg:block'>Report</span></button>
                <button className="bg-green-500 hover:bg-green-600 w-9 h-9 flex items-center justify-center text-white p-2 rounded-full shadow-md">
                    <FaWhatsapp size={20} />
                </button>
                <button className="bg-[#222] hover:bg-green-bg-[#000] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaClipboardUser size={16} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaMessage size={16} />
                </button>
                <button className="bg-[#555] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <FaFileInvoiceDollar size={16} />
                </button>
                <button className="bg-[#8e44ad]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <IoEye size={20} />
                </button>
                <button className="bg-[#333] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#ffc107]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <GoClockFill size={20} />
                </button>
                <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
                    <BiTransfer size={20} />
                </button>
                <button className="bg-transparent border border-gray-700  hover:bg-gray-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px]">
                    <BsThreeDotsVertical size={20} className='text-black hover:text-white' />
                </button>
            </div>
        ),
    
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
