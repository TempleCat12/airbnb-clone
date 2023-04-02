'use client'
import React, {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai";

import MenuItem from './MenuItem';
import Image from 'next/image';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex flex-row gap-4 items-center'>
      <button className='
        hidden
        md:block
        text-sm
        font-semibold
        py-3
        px-4
        rounded-full
        hover:bg-neutral-100
        transition
        cursor-pointer
      ' >
        Airbnb you home
      </button>
      <div onClick={() => setIsOpen(isOpen => !isOpen)}  className='
        flex
        items-center
        rounded-full
        border-[2px]
        border-neutral-200
        p-4
        md:py-1
        md:px-2
        gap-3
        cursor-pointer
        hover:shadow-md
        transition
      '>
        <AiOutlineMenu />
        <Image className='rounded-full hidden md:block' width={36} height={36} src='/images/placeholder.jpg' alt='avatar' />
      </div>
      {isOpen && 
        <div className='absolute right-0 top-14 flex flex-col cursor-pointer shadow-md rounded-xl w-[40vw] md:w-3/4 bg-white overflow-hidden text-md py-4'>
          <>
            <MenuItem label='Login' onClick={()=>{}}/>
            <MenuItem label='Logout' onClick={()=>{}}/>
          </>
        </div>
      }
    </div>
  )
}

export default UserMenu