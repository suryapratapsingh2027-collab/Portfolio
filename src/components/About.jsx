import React from 'react'
import sp from '../assets/sp.jpg'
import { Briefcase } from 'lucide-react'

const About = () => {
  return (
    <div id='about' className='mt-50 p-5 '>
      <div className='flex justify-center items-center gap-5'>
        <h1 className='text-4xl text-center dark:text-white'>About Me</h1>
        <Briefcase className='text-purple-600 size-10' />
      </div>
      <div className='flex flex-col justify-center items-center p-5 gap-5 md:justify-around md:flex-row  mt-20'>
        <div className=' rounded-full h-50 w-50 md:h-100 md:w-100'>
        <img className='rounded-full h-50 w-50 md:h-100 md:w-100' src={sp} alt="" />
      </div>
      <div className=' md:w-2/3 h-100 p-4'>
        <h1 className='text-3xl mb-5 dark:text-white'>Surya Pratap Singh Solanki</h1>
        <span className='px-5 py-2 text-purple-700 dark:border-purple-400 rounded-lg dark:bg-purple-400 bg-purple-200'>Full Stack Developer</span>
        <p className='text-2xl mt-10 dark:text-white'>I am a MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy developing responsive frontend interfaces and scalable backend APIs, handling authentication, database integration, and RESTful. Currently focused on strengthening my backend logic, system design fundamentals, and building real-world projects.</p>
        <p className='dark:text-white mt-5 text-2xl'>Email: suryapratapsingh2027@gmail.com</p>
      </div>
      </div>
    </div>
  )
}

export default About
