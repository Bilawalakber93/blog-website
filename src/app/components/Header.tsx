import Image from 'next/image';
import React from 'react'
import { TiArrowForwardOutline } from "react-icons/ti";

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src='/logo-2.png' alt='' width={180} height={180} className='w-[130] sm:w-auto rounded-2xl'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                Get Sterted <TiArrowForwardOutline />
            </button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-8 max-w-[740px] m-auto text-xs sm:text-base'>Blog pages are vital for personal branding, audience engagement, and driving traffic through SEO strategies. They can range from personal diaries to professional hubs sharing industry knowledge.</p>
            <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]" action="">
                <input type="E-Mail"
                placeholder='Enter Your E-mail'
                className='pl-4 outline-none'/>
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg:gray-600 active:text-white'>Subscribe</button>
            </form>

        </div>
    </div>
  )
}

export default Header;
