import React from 'react'
import html from '../assets/html.webp'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import mongodb from '../assets/mongodb.png'
import express from '../assets/express.png'
import node from '../assets/node.webp'
import postman from '../assets/postman.png'
import motion from '../assets/motion.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div id='skills' className='md:flex md:flex-col mt-10 md:mt-50'>
        <h1 className='text-[24px] text-center mb-30 dark:text-white'>Skills 🚀</h1>
      <div className='md:flex justify-around p-5'>
        <div className='grid grid-cols-2 gap-10 grid-rows-5 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-40 gap-y-30'>
        <div className='w-full max-w-2xl flex flex-col items-center p-3 bg-orange-100'>
            <img className='h-30 w-30' src={html} alt="" />
           
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-blue-100'>
            <img className='h-30 w-30' src={css} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-yellow-200'>
            <img className='h-30 w-30' src={js} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-indigo-100'>
            <img className='h-30 w-30' src={react} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-green-100'>
            <img className='h-30 w-30' src={mongodb} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-gray-950'>
            <img className='h-30 w-30'  src={express} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-green-200'>
            <img className='h-30 w-30' src={node} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-pink-100'>
            <img className='h-30 w-30' src={motion} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-orange-100'>
            <img className='h-30 w-30' src={git} alt="" />
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-gray-100'>
            <img className='h-30 w-30' src={github} alt="" />         
        </div>
        <div className=' w-full max-w-2xl flex flex-col items-center p-3 bg-blue-100'>
            <img className='h-30 w-30' src={tailwind} alt="" />         
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
