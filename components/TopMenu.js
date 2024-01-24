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
    <section>
      <div>
        {/* top */}
        <div>
          <Link href={"/"}>
            <h1>Website with Next.js</h1>
          </Link>
          <div onClick={openMobileMenu}>
            {/* toggle */}
            {
              isOpen ? <AiOutlineClose /> : <SlMenu />

            }
          </div>
        </div>

        {/* bottom */}
        <div>
          <div>
            <MdOutlineMarkEmailRead />
            <span>yamagata_7580@yahoo.co.jp</span>
          </div>
        </div>
        <button>
          資料ダウンロード
        </button>
      </div>
    </section >
  )
}

export default TopMenu