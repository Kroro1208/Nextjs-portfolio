import React from 'react'

function ProjectFilter({ activeCategory, setActiveCategory }) {
    return (
        <div className='flex gap-5 my-10'>
            <button className={
                activeCategory == "all" ? "bg-darkblue py-1 px-3 text-white rounded-lg" : null
            } onClick={() => setActiveCategory("all")}>全て</button>
            <button className={
                activeCategory == "react" ? "bg-darkblue py-1 px-3 text-white rounded-lg" : null
            } onClick={() => setActiveCategory("react")}>React</button>
            <button className={
                activeCategory == "nextjs" ? "bg-darkblue py-1 px-3 text-white rounded-lg" : null
            } onClick={() => setActiveCategory("nextjs")}>Next.js</button>
            <button className={
                activeCategory == "aws" ? "bg-darkblue py-1 px-3 text-white rounded-lg" : null
            } onClick={() => setActiveCategory("aws")}>AWS</button>
            <button className={
                activeCategory == "wordpress" ? "bg-darkblue py-1 px-3 text-white rounded-lg" : null
            } onClick={() => setActiveCategory("wordpress")}>WordPress</button>
            

        </div>
    )
}

export default ProjectFilter