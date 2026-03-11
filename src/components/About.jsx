import React from 'react'
import sp from '../assets/sp.jpg'
import { Briefcase } from 'lucide-react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div
    
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}

    id='about' className='mt-10 p-5 w-full max-w-9xl md:mt-50 '>
      <div className='flex justify-center items-center gap-5'>
        <h1 className='text-2xl ma:text-4xl text-center dark:text-white'>About Me</h1>
        <Briefcase className='text-purple-600 size-5' />
      </div>
      <div className='flex flex-col justify-center items-center p-5 gap-5 md:justify-around md:flex-row  mt-10'>
        <div className=' rounded-full w-2/4 md:w-1/4 justify-center flex object-cover'>
        <img className='rounded-full w-full max-w-9xl h-full max-h-80' src={sp} alt="" />
      </div>
      <div className=' md:w-2/3 p-4 flex flex-col md:items-start items-center'>
        <h1 className='text-[18px] md:text-2xl mb-5 dark:text-white'>Surya Pratap Singh Solanki</h1>
        <span className='px-5 py-2 text-purple-700 md:text-[12px] text-[8px] dark:border-purple-400 rounded-lg dark:bg-purple-400 bg-purple-200'>Full Stack Developer</span>
        <p className='text-[12px] mt-10 md:text-[18px] dark:text-white'>I am a MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy developing responsive frontend interfaces and scalable backend APIs, handling authentication, database integration, and RESTful. Currently focused on strengthening my backend logic, system design fundamentals, and building real-world projects.</p>
        <p className='dark:text-white mt-5 md:text-[18px] text-[12px]'>Email: suryapratapsingh2027@gmail.com</p>
      </div>
      </div>
    </motion.div>
  )
}

export default About
