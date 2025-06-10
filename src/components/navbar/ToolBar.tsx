'use client';
import React, { useState } from 'react';
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown, FaCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ToolBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const locale = useLocale();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='bg-[#09adce] relative z-50'>
            <div className="flex items-center justify-between lg:justify-center lg:w-[90%] mx-auto p-5">
                <button onClick={toggleMenu} className="text-white text-2xl lg:hidden">
                    <FiMenu />
                </button>

                <ul className={`hidden lg:flex flex-wrap items-center gap-3`}>
                    <li
                        className="relative"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <a href="#" className='text-sm whitespace-nowrap text-white flex items-center gap-1'>
                            Administration <FaChevronDown size={10} />
                        </a>

                        {showDropdown && (
                            <ul className="absolute top-full left-0 bg-white shadow-md rounded w-52 py-2 z-50">
                                <li><Link href={`/${locale}/administration/clinics`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">clinics</Link></li>
                                <li><Link href={`/${locale}/administration/transferred-patients`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Therapeutic services</Link></li>
                                <li><Link href={`/${locale}/administration/treatment-plans`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Treatment plans</Link></li>
                                <li><Link href={`/${locale}/administration/treatment-offers`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Offers</Link></li>
                                <li><Link href={`/${locale}/administration/forms`}  className="block px-4 py-2 text-sm text-black hover:bg-gray-100">financial and forms</Link></li>
                                <li><a href="/admin/page3" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">pay way</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Accounting & Reporting</a></li>
                    <li><a   href="#" className='text-sm whitespace-nowrap text-white'>Transferred Patients</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Diagnoses</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>User manual</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Program additions</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Services</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white mr-5'>Consultations</a></li>
                </ul>

                <ul className="flex items-center gap-3">
                    <li><a href="#" className='text-sm whitespace-nowrap text-white '>Control panel</a></li>
                    <li><a href="#" className='text-sm text-white '><IoNotifications className='text-xl' /></a></li>
                    <li className='flex items-center gap-2 text-sm whitespace-nowrap'>
                        <FaCircleUser className='w-7 h-7 text-white ' />
                        <span className='text-white'>admin</span>
                        <FaChevronDown className='text-white' />
                    </li>
                </ul>
            </div>

            {showMenu && (
                <ul className="flex flex-col gap-2 px-5 pb-4 lg:hidden text-white text-sm">
                    <li
                        className="relative"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <a href="#" className='text-sm whitespace-nowrap text-white flex items-center gap-1'>
                            Administration <FaChevronDown size={10} />
                        </a>
                        {showDropdown && (
                            <ul className="absolute top-full left-0 bg-white shadow-md rounded w-52 py-2 z-50">
                                <li><Link href={`/${locale}/administration/clinics`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">clinics</Link></li>
                                <li><Link href={`/${locale}/administration/transferred-patients`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Therapeutic services</Link></li>
                                <li><Link href={`/${locale}/administration/treatment-plans`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Treatment plans</Link></li>
                                <li><Link href={`/${locale}/administration/treatment-offers`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Offers</Link></li>
                                <li><Link href={`/${locale}/administration/forms`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">financial and forms</Link></li>
                                <li><a href="/admin/page3" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">pay way</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="#">Accounting & Reporting</a></li>
                    <li><a href="#">Transferred Patients</a></li>
                    <li><a href="#">Diagnoses</a></li>
                    <li><a href="#">User manual</a></li>
                    <li><a href="#">Program additions</a></li>
                    <li><a href="#">Our services</a></li>
                    <li><a href="#">Consultations</a></li>
                </ul>
            )}
        </div>
    );
};

export default ToolBar;
