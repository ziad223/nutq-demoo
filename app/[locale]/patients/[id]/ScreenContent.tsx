import React from "react";
import { Patient } from "./PatientView";
import Table, { Column } from "@/components/shared/reusableComponents/Table";

interface Props {
  screen: string;
  patient: Patient;
}

export default function ScreenContent({ screen, patient }: Props) {
    const basicInfoColumns: Column[] = [
        { label: "Medical Number", key: "id" },
        { label: "Name", key: "name" },
        { label: "Civil number", key: "Civil number" },
        { label: "Nationality", key: "Nationality" },
        { label: "group", key: "group" },
        { label: "Gender", key: "Gender" },
        { label: "Date of birth AD", key: "Date of birth AD" },
        { label: "Date of birth Hijr", key: "Date of birth Hijr" },
        { label: "Age", key: "Age" },
    ];

    const basicInfoData = [
        {
            id: patient.id,
            name: patient.name,
            civil_number: '1237074100',
            Nationality: 'سعودي',
            group: 'yes',
            Gender: 'male',
            Date_of_birth_AD: '05-2-2025',
            Date_of_birth_Hijri: '05-10-2025',
            Age: '26'
        },
    ];

    
  switch (screen) {
    case "data":
      return (
          <div>
              <h3 className="font-semibold mb-2 text-lg">Basic Info</h3>
              <Table columns={basicInfoColumns} data={basicInfoData} />
          </div>
      );
    case "caseStudy":
      return <div className="flex justify-between w-full">📊 Case studies: {patient.caseStudiesCount} item{patient.caseStudiesCount !== 1 && "s"}</div>;
    case "subscriptions":
      return <div className="flex items-center justify-between w-full">🩺 Medical subscriptions: {patient.caseStudiesCount}</div>;
    case "invoices":
      return <div>📃 Invoices: {patient.invoicesCount}</div>;
    case "rate":
      return <div>⭐ Reviews: {patient.ratesCount}</div>;
    case "appointments":
      return <div>📅 Appointments: {patient.appointmentsCount}</div>;
    case "reports":
      return <div>📝 Medical reports: {patient.reportsCount}</div>;
    case "medical_reports":
      return <div>📅 Monthly reports: {patient.medicalReportsCount}</div>;
    case "scans":
      return <div>🚑 Radiology: {patient.scanRequestsCount}</div>;
    case "labs":
      return <div>🧪 Lab requests: {patient.labRequestsCount}</div>;
    case "follow":
      return <div>🔄 Follow-ups: {patient.followsCount}</div>;
    case "tickets":
      return <div>✉️ Tickets: {patient.ticketsCount}</div>;
    case "home-treatment":
      return <div>🏠 Home treatment info ...</div>;
    case "contact":
      return (
        <div>
          <p>📞 Phone: +123456789</p>
          <p>📧 Email: example@example.com</p>
        </div>
      );
    default:
      return <div>Unknown tab...</div>;
  }
}
