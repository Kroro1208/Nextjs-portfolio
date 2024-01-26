import React from 'react'
import { projects } from '@/constants/projects'
import { useEffect } from 'react';

function ProjectFilter({ activeCategory, setActiveCategory, setFiltered }) {
    useEffect(() => {
        if(activeCategory == "all") {
            setFiltered(projects)
            return
        }
        const filtered = projects.filter((project) => {
            project.category.includes(activeCategory)
        });
        setFiltered(filtered);
    }, [activeCategory, setFiltered]);

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