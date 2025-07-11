'use client';
import React, { useState } from 'react';
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown, FaCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

const ToolBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const locale = useLocale();
    const t = useTranslations('toolbar');

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <div className='bg-[#09adce] relative z-50'>
            <div className="flex items-center justify-between lg:justify-center mx-auto p-5 lg:w-full">
                <button onClick={toggleMenu} className="text-white text-2xl lg:hidden">
                    <FiMenu />
                </button>

                <ul className={`hidden lg:flex flex-wrap items-center ${locale === 'ar' ? 'gap-5' : 'gap-3'}`}>
                    <li
                        className="relative"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <a href="#" className='text-sm whitespace-nowrap text-white flex items-center gap-1'>
                            {t('administration')} <FaChevronDown size={10} />
                        </a>
                        {showDropdown && (
                            <ul className={`absolute top-full ${locale === 'ar' ? 'right-0' : 'left-0'} bg-white shadow-md rounded w-52 py-2 z-50`}>
                                <li><Link href={`/${locale}/administration/clinics`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('clinics')}</Link></li>
                                <li><Link href={`/${locale}/administration/transferred-patients`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('therapeuticServices')}</Link></li>
                                <li><Link href={`/${locale}/administration/treatment-plans`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('treatmentPlans')}</Link></li>
                                <li><Link href={`/${locale}/administration/patient_groups`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('patient_groups')}</Link></li>
                                <li><Link href={`/${locale}/administration/offers`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('offers')}</Link></li>
                                <li><Link href={`/${locale}/administration/forms`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('financialAndForms')}</Link></li>
                                <li><Link href={`/${locale}/administration/payment-methods`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('paymentMethods')}</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link href={`/${locale}/accounting`} className='text-sm whitespace-nowrap text-white'>{t('accountingReporting')}</Link></li>
                    <li><Link href={`/${locale}/appointments-transferred`} className='text-sm whitespace-nowrap text-white'>{t('transferredPatients')}</Link></li>
                    <li><Link href={`/${locale}/consultations`} className='text-sm whitespace-nowrap text-white'>{t('consultations')}</Link></li>
                    <li><Link href={`/${locale}/guides`} className='text-sm whitespace-nowrap text-white'>{t('userManual')}</Link></li>
                    <li><Link href={`/${locale}/program-additions`} className='text-sm whitespace-nowrap text-white'>{t('programAdditions')}</Link></li>
                    <li><Link href={`/${locale}/services`} className='text-sm whitespace-nowrap text-white'>{t('services')}</Link></li>
                </ul>

                <ul className="flex items-center gap-3">
                    <li><a href="#" className={`text-sm whitespace-nowrap text-white ${locale === 'ar' ? 'mr-10' : 'ml-5'}`}>{t('controlPanel')}</a></li>
                    <li><a href="#" className='text-sm text-white'><IoNotifications className='text-xl' /></a></li>

                    {/* عنصر الأدمن المعدل */}
                    <li
                        className="relative flex items-center gap-2 text-sm whitespace-nowrap cursor-pointer"
                        onMouseEnter={() => setShowUserDropdown(true)}
                        onMouseLeave={() => setShowUserDropdown(false)}
                    >
                        <FaCircleUser className='w-7 h-7 text-white' />
                        <span className='text-white'>{t('admin')}</span>
                        <FaChevronDown className='text-white' />

                        {showUserDropdown && (
                            <ul className={`absolute top-full ${locale === 'ar' ? 'right-0' : 'left-0'} bg-white shadow-md rounded w-52 py-2 z-50`}>
                                <li><Link href={`/${locale}/leave-request`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('requestLeave')}</Link></li>
                                <li><Link href={`/${locale}/login`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('logout')}</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className='hidden lg:block'><LanguageSelector /></li>
                </ul>
            </div>

            {showMenu && (
                <ul className="flex flex-col gap-2 px-5 pb-4 lg:hidden text-white text-sm">
                    <li><Link href={`/${locale}/accounting`}>{t('accountingReporting')}</Link></li>
                    <li><Link href={`/${locale}/appointments-transferred`}>{t('transferredPatients')}</Link></li>
                    <li><Link href={`/${locale}/consultations`}>{t('consultations')}</Link></li>
                    <li><Link href={`/${locale}/guides`}>{t('userManual')}</Link></li>
                    <li><Link href={`/${locale}/program-additions`}>{t('programAdditions')}</Link></li>
                    <li><Link href={`/${locale}/services`}>{t('services')}</Link></li>
                    <li className='text-black'><LanguageSelector /></li>
                </ul>
            )}
        </div>
    );
};

export default ToolBar;
