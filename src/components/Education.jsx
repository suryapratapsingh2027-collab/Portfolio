import { GraduationCap } from 'lucide-react'
import React from 'react'
import sistec from '../assets/sistec.webp'
import school from '../assets/school.jpeg'

const Education = () => {
  return (
    <div id='education' className='m-10'>
      <div className='flex gap-4 text-4xl justify-center'>
        <h1 className='dark:text-white'>Education</h1>
        <GraduationCap className='size-10 text-purple-600'/>
      </div>
      <div className='flex flex-col gap-10 w-full p-10 justify-center items-center mt-20'>
        <div className='flex flex-col md:flex-row md:w-400 w-100 p-5 gap-5 dark:bg-gray-950 dark:shadow-gray-900 bg-white shadow-2xl shadow-gray-300'>
            <div className='size-100 h-69 object-cover overflow-hidden'><img className='size-90' src={sistec} alt="" /></div>
            <div>
                <h1 className='text-2xl md:text-5xl text-purple-600'>Sagar Institute of Science Technology And Research - Bhopal</h1>
                <p className='mt-3 text-gray-500 md:text-2xl'>Affilated: RGPV</p>
                <p className='mt-2 text-gray-500 md:text-2xl'>CGPA: 7.49</p>
                <h3 className='text-2xl md:text-3xl mt-3 dark:text-white'>Computer Science Engineering</h3>
                <p className='text-2xl md:text-4xl mt-3 text-yellow-600'>2020 - 2024 | Completed</p>
            </div>
         </div>
          <div className='flex flex-col md:flex-row  md:w-400 w-100 p-5 gap-5 dark:bg-gray-950 dark:shadow-gray-900 bg-white shadow-2xl shadow-gray-300'>
            <div className='size-100 h-69 object-cover overflow-hidden'><img className='size-90' src={school} alt="" /></div>
            <div>
                <h1 className='text-2xl md:text-5xl text-purple-600'>Saket Shishu Ranjan H.Sec School - Vidisha</h1>
                <p className='mt-2 text-gray-500 md:text-2xl'>MP Board</p>
                <p className='text-2xl md:text-4xl mt-3 text-yellow-600'>2020 | Completed</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Education
