import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    // xl: > 1280px md: > 768 sm: > 640px, px-1: padding-x 0.25rem > 
    <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4'>
        {children}
    </div>
  )
}

export default Container