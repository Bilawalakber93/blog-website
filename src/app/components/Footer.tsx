import Image from 'next/image'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image
        src='/logo-2.png'
        alt=''
        width={120}
        height={30}
        />
        <p className='text-sm text-white'>All right reserved. Copyright </p>
        <div className='text-white flex gap-3 w-24'>
        <FaFacebookSquare />
        <FaTwitter />
        <FaGooglePlusSquare />
        </div>
      
    </div>
  )
}

export default Footer
