import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../app/animations.css"

function Hero() {
  return (
    <section className='w-full lg:h-screen h-fit bg-whitesmoke relative px-[40] py-[10] mx-xs:px-[20]'>
      <div className='max-w-7xl flex items-center justify-between h-full mx-auto max-md:flex-col max-md:gap-10 max-md:text-center'>
        {/* 左 */}
        <div className='flex flex-col gap-10 z-40 px-10 max-md:order-2'>
          <div className='text-4xl lg:text-6xl'>
            <br />
            <h1 className='font-medium'>Leave System</h1>
            <h2 className='font-bold text-gray'>Development</h2>
            <span className='text-3xl'>to My Team !</span>
            <br />
            <p className='mt-5 text-lg'>モダンな技術を使用したシステム開発なら我々にお任せください！<br />
              幅広い技術を駆使して様々な面でサポートさせていただきます
            </p>
          </div>

          <div className='flex gap-4 max-md:justify-center'>
            <Link href={"#projects"}>
              <button className='bg-gray text-white rounded-full py-2 px-2 mx-auto hover:bg-darkblue/75 cursor-pointer lg:px-4'>
                開発実績
              </button>
            </Link>
            <Link href={"#contact"}>
              <button className='bg-gray text-white rounded-full py-2 px-2 mx-auto hover:bg-darkblue/75 cursor-pointer lg:px-4'>
                コンタクト
              </button>
            </Link>
          </div>
        </div>
        {/* 右 */}
        <Image
          src={"/asetts/Programmer-amico.png"}
          width={400}
          height={400}
          alt="heroImage"
          className='z-10 rounded-full'
        />
      </div>
      {/* animationCss読み込み */}
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </section>
  )
}

export default Hero