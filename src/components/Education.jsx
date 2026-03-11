import { GraduationCap } from 'lucide-react'
import React from 'react'
import sistec from '../assets/sistec.webp'
import school from '../assets/school.jpeg'
import {motion} from 'framer-motion'

const Education = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} 
     id='education' className='m-10'>
      <div className='flex gap-4 text-2xl justify-center'>
        <h1 className='dark:text-white'>Education</h1>
        <GraduationCap className='size-10 text-purple-600'/>
      </div>
      <div className='flex flex-col gap-10 w-full max-w-8xl p-5 justify-center items-center mt-20'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
         className='flex flex-col md:flex-row w-full max-w-7xl p-5 gap-5 items-center dark:bg-gray-950 dark:shadow-gray-900 bg-white shadow-2xl shadow-gray-300'>
            <div className='size-50 object-cover overflow-hidden'><img className='size-50' src={sistec} alt="" /></div>
            <div className='flex flex-col px-5 items-start'>
                <h1 className='text-[12px] md:text-2xl text-purple-600'>Sagar Institute of Science Technology And Research - Bhopal</h1>
                <p className='mt-3 text-gray-500 md:text-[12px] text-[10px]'>Affilated: RGPV</p>
                <p className='mt-2 text-gray-500 md:text-[12px] text-[10px] '>CGPA: 7.49</p>
                <h3 className='text-[12px] md:text-2xl mt-3 dark:text-white'>Computer Science Engineering</h3>
                <p className='text-[12px] md:text-2xl mt-3 text-yellow-600'>2020 - 2024 | Completed</p>
            </div>
         </motion.div>
        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          
          className='flex flex-col md:flex-row  w-full max-w-7xl p-5 gap-5 items-center dark:bg-gray-950 dark:shadow-gray-900 bg-white shadow-2xl shadow-gray-300'>
            <div className='size-50 object-cover overflow-hidden'><img className='size-50' src={school} alt="" /></div>
            <div className='flex flex-col items-start px-5'>
                <h1 className='text-[12px] md:text-2xl text-purple-600'>Saket Shishu Ranjan H.Sec School - Vidisha</h1>
                <p className='mt-2 text-gray-500 md:text-[12px] text-[10px] '>MP Board</p>
                <p className='text-[12px] md:text-2xl mt-3 text-yellow-600 '>2020 | Completed</p>
            </div>
         </motion.div>
      </div>
    </motion.div>
  )
}

export default Education
