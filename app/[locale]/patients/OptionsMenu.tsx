'use client';
import React, { useState, useRef, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const OptionsMenu = () => {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDeleteClick = () => {
        setOpen(false);
        setShowModal(true);
    };

    const confirmDelete = () => {
        setShowModal(false);
        alert('Patient deleted!');
    };

    return (
        <>
            <div className="relative inline-block text-left" ref={menuRef}>
                <button
                    className="bg-transparent border border-gray-700 hover:text-white hover:bg-gray-700 w-8 h-8 flex items-center justify-center p-2 rounded-[5px]"
                    onClick={toggleMenu}
                >
                    <BsThreeDotsVertical size={16} className="text-black" />
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <button
                            onClick={() => setOpen(false)}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                            Edit Patient
                        </button>
                        <button
                            onClick={handleDeleteClick}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                            Delete Patient
                        </button>
                    </div>
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                        <h2 className="text-lg font-semibold mb-4 text-black">Are you sure to delete?</h2>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
                            >
                                Back
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OptionsMenu;
