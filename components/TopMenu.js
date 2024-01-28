"use client"
import React from 'react'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useMenuStore } from '@/store/useMenuStore';


function TopMenu() {
  const { isOpen, openMobileMenu } = useMenuStore();
  return (
    <section className='px-[40px] bg-whitesmoke py-4 z-10 max-xs:px-5' id="home">
      <div className='max-w-7xl mx-auto flex flex-col justify-between items-center gap-5'>
        {/* top */}
        <div className='flex justify-between items-center w-full md:hidden'>
          <Link href={"/"}>
            <h1 className='font-bold text-3xl text-gray'>Creating Future</h1>
          </Link>
          <div className='text-2xl z-50' onClick={openMobileMenu}>
            {isOpen ? <AiOutlineClose /> : <SlMenu />}
          </div>
        </div>

        {/* bottom */}
        <div className='flex justify-between w-full items-center max-xs:flex-col max-xs:items-start max-xs:gap-2'>
          <div className='flex flex-row gap-2 items-center text-lg font-bold'>
            <MdOutlineMarkEmailRead />
            <span className='text-gray text-lg pb-1'>yamagata_7580@yahoo.co.jp</span>
          </div>
        </div>
        <button className='bg-darkblue text-white px-4 py-1 rounded-md hover:bg-darkblue/75'>
          資料ダウンロード
        </button>
      </div>
    </section >
  )
}

export default TopMenu