import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import { ExternalLink, FolderCodeIcon, FolderOpenDotIcon, Github } from 'lucide-react'

const Project = () => {
  return (
    <div id='project' className='mt-50'>
      <div className='flex gap-5 justify-center items-center'>
        <h1 className='text-4xl text-center dark:text-white'>Projects</h1>
        <FolderCodeIcon className='size-10 text-purple-600' />
      </div>
      <div className='flex mt-10 justify-center p-5'>
        <div className='md:grid md:grid-cols-3 md:gap-10 p-5 w-400'>

        <div className='flex flex-col p-5 h-110 rounded-lg dark:bg-gray-950 bg-gray-50 shadow-2xl shadow-gray-300 dark:shadow-gray-900'>
            <div className='relative group overflow-hidden h-50 w-full p-5 mb-5'>
              <img className='' src={project1} alt="" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-5">
                  <a href="https://github.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-55">
                  <Github className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://example.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-40">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                </div>
            </div>
            
            <h1 className='text-3xl font-normal mt-5 dark:text-white'>AI Resume Builder</h1>
            <p className='text-2xl text-gray-500 mt-3'>Tech: MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind</p>
        </div>
         <div className='flex flex-col p-5 rounded-lg dark:bg-gray-950 bg-gray-50 shadow-2xl shadow-gray-300 dark:shadow-gray-900'>
            <div className='relative group overflow-hidden h-50 w-full p-5 mb-5'>
              <img className='' src={project2} alt="" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-5">
                  <a href="https://github.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-55">
                  <Github className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://example.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-40">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                </div>
            </div>
            <h1 className='text-3xl font-normal mt-5 dark:text-white'>Notes App</h1>
            <p className='text-2xl text-gray-500 mt-3'>Tech: Frontend Project - ReactJS, Tailwind CSS</p>
        </div>
         <div className='flex flex-col p-5 rounded-lg dark:bg-gray-950 bg-gray-50 shadow-2xl shadow-gray-300 dark:shadow-gray-900'>
            <div className='relative group overflow-hidden h-50 w-full p-5 mb-5'>
              <img className='' src={project1} alt="" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-5">
                  <a href="https://github.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-55">
                  <Github className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://example.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-40">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                </div>
            </div>
            <h1 className='text-3xl font-normal mt-5 dark:text-white'>AI Resume Builder</h1>
            <p className='text-2xl text-gray-500 mt-3'>Tech: MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind</p>
        </div>
         <div className='flex flex-col p-5 rounded-lg dark:bg-gray-950 bg-gray-50 shadow-2xl shadow-gray-300 dark:shadow-gray-900'>
            <div className='relative group overflow-hidden h-50 w-full p-5 mb-5'>
              <img className='' src={project1} alt="" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-5">
                  <a href="https://github.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-55">
                  <Github className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://example.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-40">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                </div>
            </div>
            <h1 className='text-3xl font-normal mt-5 dark:text-white'>AI Resume Builder</h1>
            <p className='text-2xl text-gray-500 mt-3'>Tech: MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind</p>
        </div>
         <div className='flex flex-col p-5 rounded-lg dark:bg-gray-950 bg-gray-50 shadow-2xl shadow-gray-300 dark:shadow-gray-900'>
            <div className='relative group overflow-hidden h-50 w-full p-5 mb-5'>
              <img className='' src={project1} alt="" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-5">
                  <a href="https://github.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-55">
                  <Github className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://example.com" target="_blank" className="p-3 bg-white rounded-full hover:scale-110 transition-all absolute left-40">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                </div>
            </div>
            <h1 className='text-3xl font-normal mt-5 dark:text-white'>AI Resume Builder</h1>
            <p className='text-2xl text-gray-500 mt-3'>Tech: MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project
