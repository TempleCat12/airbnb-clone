import React from 'react'

interface MenuItemProp {
    label: string,
    onClick: () => void;
}
const MenuItem:React.FC<MenuItemProp> = ({label, onClick}) => {
  return (
    <button className='text-start px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
        {label}
    </button>
  )
}

export default MenuItem