"use client"

import React from 'react'
import Image from 'next/image'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaDev } from "react-icons/fa"
import { useMenuStore } from '@/store/useMenuStore'

function SideMenu() {
  const { isOpen, closeMobileMenu } = useMenuStore();
  return (
    <section className={
      `fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[20px] lg:px-16 max-lg:max-w-[146px] bg-white border border-whitesmoke
      ${isOpen ? "max-lg:block" : "max-md:hidden"}`

    }>
      <div className='flex w-full flex-1 flex-col gap-10 justify-between items-center'>
        {/* top */}
        <div className='flex flex-col justify-center items-center gap-2'>
          <Image
            src={"/asetts/logo.png"}
            width={100}
            height={100}
            alt='Naoya.Y'
          />
          <p className='font-bold'>NEXT TECH </p>
        </div>
        {/* middle */}

        {/* bottom */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className='flex flex-col lg:flex-row items-center gap-4 mb-3'>
            <a href='https://github.com/Kroro1208' target="_blank" className='bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white'>
              <AiFillGithub />
            </a>
            <a href='' target="_blank" className='bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white'>
              <FaDev />
            </a>
            <a href='' target="_blank" className='bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white'>
              <AiFillLinkedin />
            </a>
            <a href='' target="_blank" className='bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white'>
              <AiFillFacebook />
            </a>
          </div>
          <p className='max-lg:hidden'>© 2024 Nao.Y</p>
        </div>
      </div>
    </section>
  )
}

export default SideMenu