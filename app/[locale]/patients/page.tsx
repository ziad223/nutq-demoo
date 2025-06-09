import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import Link from 'next/link';
import { FaFileInvoiceDollar, FaWhatsapp } from 'react-icons/fa';
import { FaClipboardUser, FaMessage } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
import { GoClockFill } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchPatients from './SearchPatients';
import TransferBtn from './TransferBtn';
import OptionsMenu from './OptionsMenu';
interface LayoutProps {
    params: { locale: string };
}

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
    medicalNumber?: string;
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




const Page = async ({ params, searchParams }: {
  params: { locale: string },
  searchParams: {
    name?: string,
    phone?: string,
    civil?: string
  }
}) => {
  const { locale } = params;


  const generateActions = (patientId: number) => (
    <div className="flex gap-1 items-center">
      <Link href={`/${locale}/patient-report`} className="bg-blue-500 text-white p-2 rounded-lg">
        Patient <span className='lg:block'>Report</span>
      </Link>
      <a
        href="https://wa.me/96612312220239"
        target="_blank"
        rel="noopener noreferrer"
        title="send family login information"
      >
        <button className="bg-green-500 hover:bg-green-600 w-8 h-8 flex items-center justify-center text-white p-2 rounded-full shadow-md">
          <FaWhatsapp className = 'text-xl' />
        </button>
        
      </a>
      <Link
        href={`/${locale}/attendance-report?patient_id=${patientId}`}
        title="Attendance and absence record" 
        className="bg-[#222] hover:bg-[#000] w-8 h-8 flex items-center justify-center text-white p-2 rounded-[5px] shadow-md"
      >
        <FaClipboardUser size={16} />
      </Link>
      <Link
        href={`/${locale}/chat/$4?patientName=${encodeURIComponent('ziad')}`}
        className="bg-[#0d6efd] hover:bg-blue-700 w-8 h-8 flex items-center justify-center text-white p-2 rounded-[5px] shadow-md"
        title={`Chat with the patient`}
      >
        <FaMessage size={16} />
      </Link>
      <Link
       href={`/${locale}/invoices/create?patient_id=6`}
       className="bg-green-400 hover:bg-green-600 w-8 h-8 flex items-center justify-center text-white p-2 rounded-[5px] shadow-md"
        title='Add Invoice'

       >
        <FaFileInvoiceDollar size={16} />
        
      </Link>
      <button className="bg-[#8e44ad] w-8 h-8 flex items-center justify-center text-white p-2 rounded-[5px] shadow-md">
        <IoEye size={20} className='text-xl' />
      </button>
      <Link
        href={`/${locale}/session-appointments?case_study_package_id=4`}
        className="bg-[#333] hover:bg-[#444] w-8 h-8 flex items-center justify-center text-white p-2 rounded-[5px] shadow-md"
      >
        <GoClockFill size={16} />
      </Link>
      <Link
        href={`/${locale}/appointments/create`}
       className="bg-[#ffc107] w-8 h-8 flex items-center justify-center text-white p-2 rounded-[5px] shadow-md">
        <GoClockFill size={16} />
      </Link>
      <TransferBtn/>
      <OptionsMenu />

    </div>
  );

  const getPatientsData = (filters: {
    name?: string,
    phone?: string,
    civil?: string
  }): Record<string, React.ReactNode>[] => {
    const rawData: PatientData[] = [
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
        actions: generateActions(1),
      },
      {
        number: 2,
        name: 'Fatma Hassan',
        phone: '0112233445',
        nationality: 'Saudi',
        gender: 'Female',
        age: 28,
        civilNumber: '9876543210',
        medicalNumber: 'MED54321',
        paidBills: '300 SAR',
        unpaidBills: '50 SAR',
        lastVisit: '2025-05-25',
        actions: generateActions(2),
      },
      {
        number: 3,
        name: 'Mohammed Youssef',
        phone: '0100011223',
        nationality: 'Jordanian',
        gender: 'Male',
        age: 40,
        civilNumber: '1112223334',
        medicalNumber: 'MED11111',
        paidBills: '1000 JOD',
        unpaidBills: '0 JOD',
        lastVisit: '2025-06-03',
        actions: generateActions(3),
      },
      {
        number: 4,
        name: 'Sara Nabil',
        phone: '0127766554',
        nationality: 'Kuwaiti',
        gender: 'Female',
        age: 35,
        civilNumber: '5566778899',
        medicalNumber: 'MED22222',
        paidBills: '700 KWD',
        unpaidBills: '100 KWD',
        lastVisit: '2025-06-02',
        actions: generateActions(4),
      },
      {
        number: 5,
        name: 'Hassan Omar',
        phone: '0133557799',
        nationality: 'Emirati',
        gender: 'Male',
        age: 30,
        civilNumber: '4455667788',
        medicalNumber: 'MED33333',
        paidBills: '800 AED',
        unpaidBills: '200 AED',
        lastVisit: '2025-06-05',
        actions: generateActions(5),
      },
      {
        number: 6,
        name: 'Laila Ahmed',
        phone: '0149876543',
        nationality: 'Qatari',
        gender: 'Female',
        age: 26,
        civilNumber: '9988776655',
        medicalNumber: 'MED44444',
        paidBills: '400 QAR',
        unpaidBills: '50 QAR',
        lastVisit: '2025-05-30',
        actions: generateActions(6),
      },
      {
        number: 7,
        name: 'Yousef Khalid',
        phone: '0151234987',
        nationality: 'Lebanese',
        gender: 'Male',
        age: 38,
        civilNumber: '1239874560',
        medicalNumber: 'MED55555',
        paidBills: '600 LBP',
        unpaidBills: '0 LBP',
        lastVisit: '2025-06-06',
        actions: generateActions(7),
      },
      {
        number: 8,
        name: 'Noura Sami',
        phone: '0178899001',
        nationality: 'Syrian',
        gender: 'Female',
        age: 34,
        civilNumber: '3214569870',
        medicalNumber: 'MED66666',
        paidBills: '300 SYP',
        unpaidBills: '150 SYP',
        lastVisit: '2025-06-04',
        actions: generateActions(8),
      },
      {
        number: 9,
        name: 'Khaled Tamer',
        phone: '0183344556',
        nationality: 'Bahraini',
        gender: 'Male',
        age: 45,
        civilNumber: '6543217890',
        medicalNumber: 'MED77777',
        paidBills: '900 BHD',
        unpaidBills: '100 BHD',
        lastVisit: '2025-06-01',
        actions: generateActions(9),
      },
      {
        number: 10,
        name: 'Maha Ziad',
        phone: '0191122334',
        nationality: 'Palestinian',
        gender: 'Female',
        age: 29,
        civilNumber: '7894561230',
        medicalNumber: 'MED88888',
        paidBills: '450 EGP',
        unpaidBills: '150 EGP',
        lastVisit: '2025-06-03',
        actions: generateActions(10),
      },
    ];

    return rawData
      .filter(patient => {
        if (filters.name && !patient.name.toLowerCase().includes(filters.name.toLowerCase())) {
          return false;
        }

        if (filters.phone && !patient.phone.includes(filters.phone)) {
          return false;
        }

        if (filters.civil && !patient.civilNumber.toLowerCase().includes(filters.civil.toLowerCase())) {
          return false;
        }

        return true;
      })
      .map(patient => ({
        ...patient,
        number: patient.number.toString(),
        age: patient.age.toString(),
      }));
  };

  const patientsData = getPatientsData({
    name: searchParams.name,
    phone: searchParams.phone,
    civil: searchParams.civil
  });

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