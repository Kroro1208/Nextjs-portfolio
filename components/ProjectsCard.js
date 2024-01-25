import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

function ProjectsCard({ name, githubUrl, image, projectUrl, deployed }) {
    return (
        <div className='mb-4 p-4 border border-gray-200 rounded-lg bg-whitesmoke shadow-md'>
            <img
                src={image}
                alt={`${name} Image`}
            />
            <h3>{name}</h3>
            <div>
                <a href={githubUrl} target='_blank'>
                    <AiFillGithub />
                </a>
                {
                    deployed ? (<a href={projectUrl} target='_blank'>
                        <AiFillEye />
                    </a>) : null
                }
            </div>
        </div>
    )
}

export default ProjectsCard