'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';

const Calendar = dynamic(() => import('react-calendar'), {ssr: false});

const RightAside = () => {
  const [value, onChange] = useState(new Date());
  return (
    <aside className='bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] w-[280px] h-[750px] px-4 py-5'>
      <div className='flex flex-col gap-2'>
      <h2 className='font-medium'>Calendar</h2>
        <Calendar onChange={onChange} value={value} />
      </div>
    </aside>
  )
}

export default RightAside