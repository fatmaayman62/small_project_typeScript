import React from 'react'
import headerBg from '../assets/header2.png'
import { RiStarLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from '@heroui/react';
function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${headerBg})` }}
    >
        <div className="sm:container text-center p-2 sm:p-0 sm:text-start flex items-center h-full">

        <div className="wrapper-text lg:w-1/2 md:2/3">
            <h2 className='text-6xl font-bold uppercase sm:w-1/2'>Shopping <span className='text-orange-500'>Online</span></h2>
            <p className='my-5 text-gray-600 leading-relaxed text-sm sm:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam nobis aperiam ullam atque repellat nemo? Minus, quas voluptatibus! Perspiciatis deleniti ex delectus? Explicabo sapiente voluptate ipsum ipsa, quod dolores animi minus culpa facilis obcaecati magni consectetur harum distinctio sit.</p>
            <div className="flex items-center md:gap-5  gap-2">
                <p className='flex items-center gap-1 text-gray-600 text-sm sm:text-[16px]'><RiStarLine className="text-orange-500 font-bold" />Premium Quality</p>
                <p className='flex items-center gap-1 text-gray-600 text-sm sm:text-[16px]'><RiSecurePaymentLine className="text-orange-500 font-bold" />Security Payment</p>
                <p className='flex items-center gap-1 text-gray-600 text-sm sm:text-[16px]'><HiOutlineTruck className="text-orange-500 font-bold" />Security Payment</p>

            </div>
            <div className="flex items-center gap-4 my-6">
                <Button className='px-8 flex gap-4 items-center bg-gradient-to-r from-orange-500 to-red-500 font-bold text-white hover:shadow-md'>Shop Now <FaArrowRightLong /></Button>
                <Button variant='bordered' className='font-bold text-gray-600 px-6 hover:border-orange-500'>Buy Now</Button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Home
