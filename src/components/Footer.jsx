import { LocateIcon, Mail, Map, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 bg-purple-600 dark:bg-gray-950 w-full max-w-9xl'>
        <div className='flex md:flex-row flex-col md:justify-around items-center p-5 py-10'>
      <div className='flex flex-col gap-5'>
        <p className='text-2xl md:text-2xl text-yellow-600 font-normal'>❤️ Surya's Portfolio</p>
        <p className='md:text-[20px] text-white'>Thank you for visiting my personal portfolio website. <br />Connect with me over socials.</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-2xl md:text-2xl text-white mb-5 mt-7'>Quick Links</p>
        <a className='text-white md:text-[15px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#home">Home</a>
        <a className='text-white md:text-[15px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#about">About</a>
        <a className='text-white md:text-[15px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#skills">Skills</a>
        <a className='text-white md:text-[15px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#project">Projects</a>
        <a className='text-white md:text-[15px] transtion-all duration-300 hover:text-yellow-600 mb-3' href="#education">Education</a>
      </div>
      <div className='flex flex-col items-start'>
        <p className=' md:text-2xl text-[20px] mb-5 text-white mt-7'>Contact</p>
        <p className='flex items-center gap-5 text-white text-[15px] md:text-[15px] transition-all duration-300 hover:text-yellow-600 mb-3'><Phone /> +91  XXX XXX XXXX</p>
        <p className='flex items-center gap-5 text-white md:text-[15px] transition-all duration-300 hover:text-yellow-600 mb-3 text-[15px]'><Mail /> suryapratapsingh2027@gmail.com</p>
        <p className='flex items-center gap-5 text-white md:text-[15px] transition-all duration-300 hover:text-yellow-600 mb-3 text-[15px]'><Map /> Vidisha, Madhya Pradesh - 464001</p>
      </div>
    </div>
    <div className='flex justify-center'>
        <hr className='p-5 w-200 md:w-400 text-white' />
    </div>
    <div className='flex justify-center pb-5'>
        <p className='md:text-[20px] text-[10px] text-white'>🔥 Turning ideas into scalable web experiences.</p>
    </div>
    </div>
  )
}

export default Footer
