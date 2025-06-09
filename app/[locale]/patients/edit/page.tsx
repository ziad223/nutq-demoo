'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import TextInput from '@/components/shared/reusableComponents/TextInput';
import RadioGroup from '@/components/shared/reusableComponents/GenderRadio';

const EditPatientPage = () => {
    const t = useTranslations();
    const [formData, setFormData] = useState({
        civil: '',
        first_name: '',
        phone: '',
        phone_two: '',
        gender: '',
        city_name: '',
        age: '',
        country_id: '',
        image: null as File | null,
        patient_group_id: '',
        sugar: false,
        pressure: false,
        birthdate: '',
        insurance: false,
        insurance_id: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData(prev => ({
                ...prev,
                image: e.target.files![0]
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 mt-20">
            <h2 className='text-xl mb-5 font-bold'>Edit patient</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-10">
                <TextInput placeholder="Civil number (10 digits)"  name="first_name" defaultValue={formData.first_name} />
                <TextInput placeholder="name"  name="phone" defaultValue={formData.phone} />
                <TextInput placeholder="phone" name="phone_two" defaultValue={formData.phone_two} />
                <TextInput placeholder="other phone" name="phone_two" defaultValue={formData.phone_two} />
                <TextInput placeholder="Enter city name" name="city_name" defaultValue={formData.city_name} />
                <TextInput placeholder="Age" name="city_name" defaultValue={formData.city_name} />
                <TextInput label="Age" name="age" defaultValue={formData.age} />
                <TextInput label="Birthdate" name="birthdate" defaultValue={formData.birthdate} />

                <RadioGroup
                    label="Gender"
                    name="gender"
                    options={[
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' },
                    ]}
                />
                <RadioGroup
                    label="Nationality"
                    name="nationality"
                    options={[
                        { label: 'سعودي', value: 'سعودي' },
                        { label: 'غير سعودي', value: 'غير سعودي' },
                    ]}
                />

              
                <div className="col-span-1">
                    <label className="block text-sm font-bold mb-1 text-black">Upload Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                <div className='flex gap-1 items-center'>
                <label >Do you suffer from allergies or not?</label>
                <input type="checkbox" />
            </div>
                <div className='flex gap-1 items-center'>
                    <label >Do you suffer from allergies or not?</label>
                    <input type="checkbox" />
                </div>
                <div className='flex gap-1 items-center'>
                    <label >Do you suffer from allergies or not?</label>
                    <input type="checkbox" />
                </div>
                <button
                    type="submit"
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save Data
                </button>
            </div>
          

           
        </form>
    );
};

export default EditPatientPage;
