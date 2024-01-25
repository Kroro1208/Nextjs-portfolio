import React from 'react'
import { AiFillBug, AiFillBulb } from 'react-icons/ai'

function Projects() {
  return (
    <section className='w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white' id="projects">
      <div className='max-w-7xl mx-auto'>
        {/* セクションタイトル */}
        <div className='inline-block'>
          <p className='bg-cadetblue text-white text-sm font-medium py-2 px-4 rounded-full flex items-center gap-1'>
            <span>
              <AiFillBulb className='w-4 h-4'/>
            </span>
            開発実績
          </p>
        </div>
        {/* フィルター */}

        {/* カード */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        </div>
        {/* もっと見る */}
        <div className='text-center mt-4'>
          <button className='bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75' onClick={""}>
            もっと見る
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects