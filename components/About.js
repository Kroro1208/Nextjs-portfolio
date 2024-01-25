import React from 'react'
import { AiFillBulb } from 'react-icons/ai'

function About() {
  return (
    <section className='w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white' id="about">
      <div className='max-w-7xl mx-auto'>
        {/* タイトル */}
        <div className='inline-block'>
          <p className='bg-gray text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-1'>
            <span>
              <AiFillBulb className='w-4 h-4' />
            </span>
            自己紹介
          </p>
        </div>
        {/* メイン分 */}
        <div className='mt-7'>
          <p p className='mt-6 text-gray-800 text-lg md:text-xl leading-9'>
            フィットネス事業を開始したときにチームにエンジニアがおらず、エンジニアという存在の重要性に気づきました。<br />
            それから、個人でトレーナーをしているときも「自分で作りたいアプリやサービスがあるのに作れない」という歯がゆい思いが続き、独学でプログラミングを始めました。<br />
            <br/>現在はDocker、Gitを使用してJavaScript, React/Next.js, PHP, Laravelなどで開発しています。
          </p>
        </div>
        {/* 軽い実績 */}
        <div className='mt-10'>
          <div className='w-full'>
            <ul className='flex justify-between gap-10 flex-col md:flex-row'>
              <li className='w-full shadow-sm'
                style={{
                  backgroundImage: "url('/asetts/Trainer-cuate.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.7
                }}>
                <div className='w-full text-center py-[30px] md:py-[60px] rounded-md'>
                  <h3 className='text-4xl mb-1 text-black'>900+</h3>
                  <span>YOUTUBE</span>
                </div>
              </li>

              <li className='w-full shadow-sm'
                style={{
                  backgroundImage: "url('/asetts/Fire.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.7
                }}>
                <div className='w-full text-center py-[30px] md:py-[60px] rounded-mb'>
                  <h3 className='text-4xl mb-1 text-black'>30+</h3>
                  <span>PROJECTS</span>
                </div>
              </li>
              <li className='w-full shadow-sm'
                style={{
                  backgroundImage: "url('/asetts/Cooking-cuate.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.7
                }}>
                <div className='w-full text-center py-[30px] md:py-[60px] rounded-md'>
                  <h3 className='text-4xl mb-1 text-black'>10+</h3>
                  <span>YEAR</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About