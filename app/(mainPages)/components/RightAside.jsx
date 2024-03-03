'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import UserIcon from "../../../public/userIcon.png";
import Image from 'next/image';


const Calendar = dynamic(() => import('react-calendar'), {ssr: false});
const users = [
  { icon: UserIcon.src, name: "John", surname: "Smith" },
  { icon: UserIcon.src, name: "Abgar", surname: "Smith" },
  { icon: UserIcon.src, name: "Mesrop", surname: "Smith" },
  { icon: UserIcon.src, name: "Koryun", surname: "Smith" },
  { icon: UserIcon.src, name: "Vahan", surname: "Smith" },
  { icon: UserIcon.src, name: "Nikol", surname: "Smith" },

];

const RightAside = () => {
  const [value, onChange] = useState(new Date());
  return (
    <aside className='bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] w-[280px] h-[750px] px-4 py-5'>
      <div className='flex flex-col gap-2'>
      <h2 className='font-medium'>Calendar</h2>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="flex flex-col gap-10 mt-4">
        {
          users.map((user) => {
            return (
              <div key={user.name} className='flex items-center gap-3'>
                  <Image src={user.icon} alt='' width={25} height={25} />
                  <p>{user.name + ' ' + user.surname}</p>
              </div>
            )
          })
        }
      </div>
    </aside>
  )
}

export default RightAside