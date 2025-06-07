'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import Table, { Column } from '@/components/shared/reusableComponents/Table';

interface Patient {
    id: number;
    name: string;
}

const AttendanceReportPage = () => {
    const locale = useLocale();
    const router = useRouter();
    const searchParams = useSearchParams();
    const patientIdFromUrl = searchParams.get('patient_id') || '';

    const [patients, setPatients] = useState<Patient[]>([]);
    const [selectedPatient, setSelectedPatient] = useState(patientIdFromUrl);

    const allPatients: Patient[] = [
        { id: 1, name: 'Ahmed Ali' },
        { id: 2, name: 'Fatma Hassan' },
        { id: 3, name: 'Mohammed Youssef' },
        { id: 4, name: 'Sara Nabil' },
        { id: 5, name: 'Hassan Omar' },
        { id: 6, name: 'Laila Ahmed' },
        { id: 7, name: 'Yousef Khalid' },
        { id: 8, name: 'Noura Sami' },
        { id: 9, name: 'Khaled Tamer' },
        { id: 10, name: 'Maha Ziad' }
    ];

    useEffect(() => {
        setPatients(allPatients);
    }, []);

    useEffect(() => {
        if (selectedPatient) {
            router.replace(`/${locale}/attendance-report?patient_id=${selectedPatient}`);
        }
    }, [selectedPatient, locale]);

    const currentPatient = patients.find((p) => p.id.toString() === selectedPatient);

    // 👇 الأعمدة المطلوبة للجدول
    const columns: Column[] = [
        { label: 'Package', key: 'package' },
        { label: 'Day', key: 'day' },
        { label: 'Appointment Date', key: 'appointmentDate' },
        { label: 'Cost', key: 'cost' },
        { label: 'Type of Sessions', key: 'type' },
        { label: 'Audience', key: 'audience' },
    ];

    const data = [
        {
            package: 'Gold',
            day: 'Monday',
            appointmentDate: '2025-06-10',
            cost: '$100',
            type: 'One-on-One',
            audience: 'Adults',
        },
        {
            package: 'Silver',
            day: 'Wednesday',
            appointmentDate: '2025-06-12',
            cost: '$75',
            type: 'Group',
            audience: 'Teens',
        },
    ];

    return (
        <div className="p-6 lg:w-[85%] mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-black">
                    Presence and absence
                </h1>
            </div>

            {selectedPatient && (
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="mb-6">
                        <label htmlFor="patient-select" className="block mb-2 font-medium text-black">
                            Select Patient:
                        </label>
                        <select
                            id="patient-select"
                            value={selectedPatient}
                            onChange={(e) => setSelectedPatient(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full text-black"
                        >
                            <option value="" hidden>Select the patient</option>
                            {patients.map((patient) => (
                                <option key={patient.id} value={patient.id}>
                                    {patient.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <h2 className='text-black text-center'>
                        (تحليل سلوك تطبيقي) ( Total sessions 24 )
                         <span className='text-red-600 block lg:inline-block'>Total 2300 SAR</span>
                   </h2>
                    <Table columns={columns} data={data} />
                </div>
            )}
        </div>
    );
};

export default AttendanceReportPage;
