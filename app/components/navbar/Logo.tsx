import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Logo = () => {
  return (
    <Link href='/' className='hidden sm:inline-block'>
      {/* image src value is so weird */}
      <Image src='/images/logo.png' width={100} height={100}  alt='logo' />
    </Link>
  )
}

export default Logo