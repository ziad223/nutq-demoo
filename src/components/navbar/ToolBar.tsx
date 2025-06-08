'use client';
import React, { useState } from 'react';
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown, FaCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

const ToolBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='bg-[#09adce]'>
            <div className="flex items-center justify-between lg:justify-center lg:w-[90%] mx-auto p-5">
                <button onClick={toggleMenu} className="text-white text-2xl lg:hidden">
                    <FiMenu />
                </button>

                <ul className={`hidden lg:flex flex-wrap items-center gap-3`}>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Administration</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Accounting & Reporting</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Transferred Patients</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Diagnoses</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>User manual</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Program additions</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white'>Our services</a></li>
                    <li><a href="#" className='text-sm whitespace-nowrap text-white mr-5'>Consultations</a></li>
                </ul>

                <ul className="flex items-center gap-3">
                    <li><a href="#" className='text-sm whitespace-nowrap text-white '>Control panel</a></li>
                    <li><a href="#" className='text-sm text-white '><IoNotifications className='text-xl' /></a></li>
                    <li className='flex items-center gap-2 text-sm whitespace-nowrap'>
                        <FaCircleUser className='w-7 h-7 text-white ' />
                        <span className = 'text-white'>admin</span>
                        <FaChevronDown className = 'text-white' />
                    </li>
                </ul>
            </div>

            {showMenu && (
                <ul className="flex flex-col gap-2 px-5 pb-4 lg:hidden text-white text-sm">
                    <li><a href="#">Administration</a></li>
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
