import React from 'react'
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className='w-full md:w-auto flex justify-between items-center border-[2px] rounded-full py-2 shadow-sm hover:shadow-md transition cursor-pointer text-sm '>
      <button className='px-3 text-center font-semibold'>
        Anywhere
      </button>
      <button className='flex-1 hidden sm:block px-6 border-x-[2px] text-center font-semibold'>
        AnyDuration
      </button>
      <div className='flex flex-row gap-2 items-center px-3'>
        <button className='sm:inline-block hidden'>
          Add Guests
        </button>
        <div className='bg-rose-500 rounded-full text-white p-2'>
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  )
}

export default Search