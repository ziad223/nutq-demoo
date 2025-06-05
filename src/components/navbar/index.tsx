'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; 
import { FaCalendarAlt, FaUsers, FaAlipay, FaCcAmazonPay } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiTextSubscriptFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';
import { useLocale } from 'next-intl';
import ToolBar from './ToolBar';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const locale = useLocale();
    const pathname = usePathname();

    const hideNavbarPaths = ['/login', '/family-login', `/${locale}`];
    const shouldHideNavbar = hideNavbarPaths.some(path => pathname.startsWith(`/${locale}${path}`));

    if (shouldHideNavbar) return null;

    return (
        <>
            <ToolBar />
            <div className='bg-white'>
                <div className='lg:w-[90%] mx-auto px-5 py-4'>
                    <div className='flex justify-between items-center lg:hidden'>
                        <button onClick={toggleMenu} className='text-2xl text-black'>
                            <FiMenu />
                        </button>
                    </div>

                    <ul className={`flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0 ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
                        <li>
                            <Link href={`/${locale}/home`} className='text-black flex items-center gap-1 text-sm'>
                                Home <IoMdHome className='text-gray-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/patients`} className='text-black flex items-center gap-1 text-sm'>
                                Patients <FaUsers className='text-gray-500' />
                            </Link>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Appointments <FaCalendarAlt className='text-gray-500' /></a>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Today Appointments <FaCalendarAlt className='text-gray-500' /></a>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Appointments are pending <FaCalendarAlt className='text-gray-500' /></a>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Invoices <LiaFileInvoiceSolid className='text-gray-500' /></a>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Pay a visit <FaAlipay className='text-gray-500' /></a>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Subscriptions <PiTextSubscriptFill className='text-gray-500' /></a>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Pay a package <FaCcAmazonPay className='text-gray-500' /></a>
                        </li>
                        <li>
                            <a href="#" className='text-black flex items-center gap-1 text-sm'>Case Study <FaCcAmazonPay className='text-gray-500' /></a>
                        </li>
                    </ul>
                </div>

                <div className='w-full h-2 bg-[#09adce]'></div>
            </div>
        </>
    );
};

export default Navbar;
