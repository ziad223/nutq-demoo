import React from 'react';
import { FaCalendarAlt, FaPrint } from 'react-icons/fa';

const page = () => {
  return (
      <div className='w-[95%] mx-auto'>
          <h2 className='mt-20'>المواعيد</h2>
          <div className='bg-white rounded-[10px] mt-3 p-5'>
           <div className='flex items-center gap-3'>
            <button className= 'bg-[#ffc107] text-white px-3 py-3 rounded-[5px] '>
                 <FaPrint/>
            </button>
                  <button className='bg-[#0d6efd] text-white px-2 py-2 rounded-[5px] flex items-center gap-2 '>
                      <FaCalendarAlt  />
                      <span>جدول الأخصائيين</span>
                  </button>
                  <button className='bg-[#0d6efd] text-white px-2 py-2 rounded-[5px] flex items-center gap-2 '>
                      <FaCalendarAlt />
                      <span>جدول المواعيد</span>
                  </button>
                  <button className='bg-[#6c757d] text-white px-2 py-2 rounded-[5px] flex items-center gap-2 '>
                      <span>Session Dates</span>
                  </button>
                  <button className='bg-[#198754] text-white px-2 py-2 rounded-[5px] flex items-center gap-2 '>
                      <span>كل المواعيد</span>
                  </button>
                  <button className='bg-[#09adce] text-white px-2 py-2 rounded-[5px] flex items-center gap-2 '>
                      <span>Book an new appointment</span>
                  </button>
                  <button className='bg-[#09adce] text-white px-2 py-2 rounded-[5px] flex items-center gap-2 '>
                      <span>زائر جديد</span>
                  </button>
           </div>
           <div className="mt-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
                <label className = 'text-gray-500'>المريض</label>
                <select>
                    <option value="s" hidden>أختر مريض</option>
                    <option value="s">خالد بن تركي</option>
                    <option value="s">خالد  علي الهاجري</option>
                    <option value="s">أحمد سامي</option>
                    <option value="s">سلمي نادر </option>
                </select>
            </div>
            </div>
           </div>
          </div>
    </div>
  );
}

export default page;
