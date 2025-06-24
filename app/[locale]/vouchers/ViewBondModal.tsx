'use client';

import React from 'react';

interface ViewBondModalProps {
    isOpen: boolean;
    onClose: () => void;
    bondData: BondData | null;
}
interface BondData {
    id: string;
    description: string;
    date: string;
    debit: string;
    credit: string;
  }
const ViewBondModal: React.FC<ViewBondModalProps> = ({ isOpen, onClose, bondData }) => {
    if (!isOpen || !bondData) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">تفاصيل السند</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">#</p>
                            <p className="font-medium">{bondData.id}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">التاريخ</p>
                            <p className="font-medium">{bondData.date}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">البيان</p>
                        <p className="font-medium">{bondData.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">مدين</p>
                            <p className="font-medium">{bondData.debit}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">دائن</p>
                            <p className="font-medium">{bondData.credit}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        إغلاق
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewBondModal;