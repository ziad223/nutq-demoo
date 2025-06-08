'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function AppointmentPage() {
    const [patientKey, setPatientKey] = useState('');
    const [clinicId, setClinicId] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [appointmentStatus, setAppointmentStatus] = useState('');
    const [appointmentDuration, setAppointmentDuration] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [appointmentTimeEnd, setAppointmentTimeEnd] = useState('');
    const [review, setReview] = useState(false);

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="mb-5 text-xl text-center lg:text-left">Add appointment</h2>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                {/* Left Main Form */}
                <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-md shadow">
                    <div className="flex justify-center lg:justify-end mb-3">
                        <Link
                            href="/appointments"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm text-center"
                        >
                            Appointments
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm mb-1">Search by medical number or patient number</label>
                            <input type="text" value={patientKey} onChange={(e) => setPatientKey(e.target.value)} className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Patient name</label>
                            <input type="text" value='طارق الملا' disabled readOnly className="form-input w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Phone</label>
                            <input type="tel" value='123456789' disabled readOnly className="form-input w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Clinic</label>
                            <select value={clinicId} onChange={(e) => setClinicId(e.target.value)} className="form-select w-full border border-gray-300 rounded px-3 py-2">
                                <option>Choose a clinic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Doctor</label>
                            <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="form-select w-full border border-gray-300 rounded px-3 py-2">
                                <option>Choose a doctor</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Appointment Status</label>
                            <select value={appointmentStatus} onChange={(e) => setAppointmentStatus(e.target.value)} className="form-select w-full border border-gray-300 rounded px-3 py-2">
                                <option value="confirmed">Confirmed</option>
                                <option value="pending">Pending</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="transferred">Transferred</option>
                                <option value="examined">Examined</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Period</label>
                            <select value={appointmentDuration} onChange={(e) => setAppointmentDuration(e.target.value)} className="form-select w-full border border-gray-300 rounded px-3 py-2">
                                <option value="">Period</option>
                                <option value="morning">Morning</option>
                                <option value="evening">Evening</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Appointment Date</label>
                            <input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div className="flex items-center space-x-2 sm:col-span-2 md:col-span-1">
                            <input type="checkbox" id="review" checked={review} onChange={() => setReview(!review)} />
                            <label htmlFor="review" className="text-sm">Review</label>
                        </div>
                        <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center mt-4">
                            <button className="bg-green-600 text-white px-6 py-2 rounded-md text-sm w-full sm:w-auto">
                                Save
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appointment Start Time */}
                <div className="bg-white p-4 sm:p-6 rounded-md shadow">
                    <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Appointment Time</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        <label className="btn-item">
                            <input type="radio" name="appointment_time" value="08:00" onChange={() => setAppointmentTime('08:00')} className="hidden" />
                            <span className={`px-4 py-2 border rounded block text-center ${appointmentTime === '08:00' ? 'bg-blue-500 text-white' : ''}`}>
                                08:00 AM
                            </span>
                        </label>
                    </div>
                </div>

               
            </div>
        </div>
    );
}
