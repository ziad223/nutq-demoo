"use client";

import React, { useState } from "react";
import ScreenContent from "./ScreenContent";
import { FaEye } from "react-icons/fa";

type ScreenKey =
  | "data"
  | "caseStudy"
  | "subscriptions"
  | "invoices"
  | "rate"
  | "appointments"
  | "reports"
  | "medical_reports"
  | "scans"
  | "labs"
  | "follow"
  | "tickets"
  | "home-treatment"
  | "contact";

export interface Patient {
  id: number;
  name: string;
  userName: string;
  caseStudiesCount: number;
  invoicesCount: number;
  ratesCount: number;
  appointmentsCount: number;
  reportsCount: number;
  medicalReportsCount: number;
  scanRequestsCount: number;
  labRequestsCount: number;
  followsCount: number;
  ticketsCount: number;
}

interface Props {
  patient: Patient;
}

const tabs: { key: ScreenKey; label: string; count?: number }[] = [
  { key: "data", label: "Patient data" },
  { key: "caseStudy", label: "Case study", count: 2 },
  { key: "subscriptions", label: "Medical subscriptions", count: 2 },
  { key: "invoices", label: "Invoices", count: 5 },
  { key: "rate", label: "Reviews", count: 4 },
  { key: "appointments", label: "Appointments", count: 3 },
  { key: "reports", label: "Medical reports", count: 1 },
  { key: "medical_reports", label: "Monthly reports", count: 2 },
  { key: "scans", label: "Radiology requests", count: 0 },
  { key: "labs", label: "Lab requests", count: 3 },
  { key: "follow", label: "Follow-up", count: 2 },
  { key: "tickets", label: "Contact supervisor", count: 1 },
  { key: "home-treatment", label: "Home application" },
  { key: "contact", label: "Contact data" },
];

export default function PatientView({ patient }: Props) {
  const [screen, setScreen] = useState<ScreenKey>("data");

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/4">
        <div className="bg-gray-50 border rounded-lg divide-y">
          {tabs.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setScreen(key)}
              className={`w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-200 ${
                screen === key
                  ? "bg-[#09adce] font-semibold text-white"
                  : "bg-transparent"
              }`}
            >
              {label}
              {typeof count !== "undefined" && (
                <span className="ml-2  bg-red-600 text-white w-6 h-6 flex items-center justify-center px-2 rounded-full text-xs">
                  {patient[`${key}Count` as keyof Patient] ?? count}
                </span>
              )}
            </button>
          ))}
          <a
            href={`/patient-file/${patient.id}`}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-b-lg"
          >
            View the patient’s medical file
          </a>
        </div>
      </div>

      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <ScreenContent screen={screen} patient={patient} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            Number: <span className="text-indigo-600">{patient.id}</span>
          </div>
          <div>
            Employee: <span className="text-indigo-600">{patient.userName}</span>
          </div>
          <div>
            Latest update: <span className="text-indigo-600">{patient.userName}</span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href={`/patient-file/${patient.id}`}
            className=" flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
          >
            <FaEye className = 'text-lg'/>
             View the patient is medical file
          </a>
        </div>
      </div>
    </div>
  );
}
