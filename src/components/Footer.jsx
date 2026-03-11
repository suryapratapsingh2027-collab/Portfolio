import { LocateIcon, Mail, Map, Phone } from 'lucide-react'
import React from 'react'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
     className='mt-20 bg-purple-600 dark:bg-gray-950 w-full max-w-9xl'>
        <div className='flex md:flex-row md:justify-around flex-col md:items-center p-5 py-5'>
      <div className='flex flex-col gap-5'>
        <p className='text-[12px] md:text-2xl text-yellow-600 font-normal'>❤️ Surya's Portfolio</p>
        <p className='md:text-[20px] text-[10px] text-white'>Thank you for visiting my personal portfolio website. <br />Connect with me over socials.</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-[12px] md:text-2xl text-white mb-5 mt-7'>Quick Links</p>
        <a className='text-white md:text-[15px] text-[10px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#home">Home</a>
        <a className='text-white md:text-[15px] text-[10px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#about">About</a>
        <a className='text-white md:text-[15px] text-[10px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#skills">Skills</a>
        <a className='text-white md:text-[15px] text-[10px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#project">Projects</a>
        <a className='text-white md:text-[15px] text-[10px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#education">Education</a>
      </div>
      <div className='flex flex-col items-start'>
        <p className=' md:text-2xl text-[12px] mb-5 text-white mt-7'>Contact</p>
        <p className='flex items-center gap-5 text-white text-[10px] md:text-[15px] transition-all duration-300 hover:text-yellow-600 mb-3'><Phone className='size-3' /> +91  XXX XXX XXXX</p>
        <p className='flex items-center gap-5 text-white md:text-[15px] transition-all duration-300 hover:text-yellow-600 mb-3 text-[10px]'><Mail className='size-3'/> suryapratapsingh2027@gmail.com</p>
        <p className='flex items-center gap-5 text-white md:text-[15px] transition-all duration-300 hover:text-yellow-600 mb-3 text-[10px]'><Map className='size-3'/> Vidisha, Madhya Pradesh - 464001</p>
      </div>
    </div>
    <div className='flex justify-center'>
        <hr className='p-5 w-200 md:w-400 text-white' />
    </div>
    <div className='flex justify-center pb-5'>
        <p className='md:text-[20px] text-[10px] text-white'>🔥 Turning ideas into scalable web experiences.</p>
    </div>
    </motion.div>
  )
}

export default Footer
