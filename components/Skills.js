import React from 'react'
import { AiFillBulb } from 'react-icons/ai'
import Image from 'next/image'

function Skills() {
  return (
    <section>
      <div>
        {/* セクションタイトル */}
        <div>
          <p>
            <span><AiFillBulb /></span>
            使用言語
          </p>
        </div>
        {/* グリッドレイアウト */}
        <div>
          <div>
            <Image
              src={'/asetts/html.png'}
              width={100}
              height={100}
              alt="html"
            />
            <span>HTML</span>
          </div>
          <div>
            <Image
              src={'/asetts/css.png'}
              width={100}
              height={100}
              alt="css"
            />
            <span>CSS</span>
          </div>
          <div>
            <Image
              src={'/asetts/js2.png'}
              width={100}
              height={100}
              alt="js"
            />
            <span>JavaScript</span>
          </div>
          <div>
            <Image
              src={'/asetts/React.png'}
              width={100}
              height={100}
              alt="react"
            />
            <span>React</span>
          </div>
          <div>
            <Image
              src={'/asetts/nextjs.png'}
              width={100}
              height={100}
              alt="nextjs"
            />
            <span>Next.js</span>
          </div>
          <div>
            <Image
              src={'/asetts/TypeScript.png'}
              width={100}
              height={100}
              alt="ts"
            />
            <span>TypeScript</span>
          </div>
          <div>
            <Image
              src={'/asetts/tailwind.png'}
              width={100}
              height={100}
              alt="tailwind"
            />
            <span>Tailwind CSS</span>
          </div>
          <div>
            <Image
              src={'/asetts/laravel.png'}
              width={100}
              height={100}
              alt="laravel"
            />
            <span>Laravel</span>
          </div>
          <div>
            <Image
              src={'/asetts/mysql.png'}
              width={100}
              height={100}
              alt="mysql"
            />
            <span>MySQL</span>
          </div>
          <div>
            <Image
              src={'/asetts/git.png'}
              width={100}
              height={100}
              alt="git"
            />
            <span>Git</span>
          </div>
          <div>
            <Image
              src={'/asetts/docker.png'}
              width={100}
              height={100}
              alt="docker"
            />
            <span>Docker</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills