import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

function ProjectsCard({ name, githubUrl, image, projectUrl, deployed }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 p-8 border border-slate-300 rounded-2xl bg-whitesmoke shadow-xl" >
            <img
                src={image}
                alt={`${name} Image`}
                className='w-full h-auto mb-2 rounded-lg'
            />
            <h3 className='ml-2'>{name}</h3>
            <div className='flex gap-2 items-center w-full m-1'>
                <a href={githubUrl} target='_blank' className='p-1 rounded-full text-lg'>
                    <AiFillGithub />
                </a>
                {
                    deployed ? (<a href={projectUrl} target='_blank' className='p-1 rounded-full text-xl'>
                        <AiFillEye />
                    </a>) : null
                }
            </div>
        </motion.div >
    )
}

export default ProjectsCard