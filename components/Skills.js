import React from 'react'
import { AiFillBulb } from 'react-icons/ai'
import Image from 'next/image'

function Skills() {
  return (
    <section className='w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white' id="skills">
      <div className='max-w-7xl mx-auto'>
        {/* セクションタイトル */}
        <div className='inline-block'>
          <p className='bg-cadetblue text-white text-sm font-medium py-2 px-4 rounded-full flex items-center gap-1'>
            <span><AiFillBulb className='w-4 h-4'/></span>
            My Skills
          </p>
        </div>
        {/* グリッドレイアウト */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 max-xs:grid-cols-1 mt-10'>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/html.png'}
              width={100}
              height={100}
              alt="html"
              className='mb-2'
            />
            <span>HTML</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/css.png'}
              width={100}
              height={100}
              alt="css"
              className='mb-2'
            />
            <span>CSS</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/js2.png'}
              width={100}
              height={100}
              alt="js"
              className='mb-2'
            />
            <span>JavaScript</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/React.png'}
              width={100}
              height={100}
              alt="react"
              className='mb-2'
            />
            <span>React</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/nextjs.png'}
              width={100}
              height={100}
              alt="nextjs"
              className='mb-10'
            />
            <span>Next.js</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/TypeScript.png'}
              width={100}
              height={100}
              alt="ts"
              className='mb-2'
            />
            <span>TypeScript</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/tailwind.png'}
              width={100}
              height={100}
              alt="tailwind"
              className='mb-12'
            />
            <span>Tailwind CSS</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/laravel.png'}
              width={100}
              height={100}
              alt="laravel"
              className='mb-2'
            />
            <span>Laravel</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/mysql.png'}
              width={100}
              height={100}
              alt="mysql"
              className='mb-2'
            />
            <span>MySQL</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/git.png'}
              width={100}
              height={100}
              alt="git"
              className='mb-8'
            />
            <span>Git</span>
          </div>
          <div className='flex flex-col bg-white p-8 rounded-md text-center shadow-sm justify-center'>
            <Image
              src={'/asetts/docker.png'}
              width={100}
              height={100}
              alt="docker"
              className='mb-2'
            />
            <span>Docker</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills