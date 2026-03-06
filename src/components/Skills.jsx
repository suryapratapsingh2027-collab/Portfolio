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
    <div id='skills' className='md:flex md:flex-col mt-70 md:mt-20'>
        <h1 className='text-4xl text-center mb-20 dark:text-white'>Skills 🚀</h1>
      <div className='md:flex justify-around p-5'>
        <div className='grid grid-cols-3 gap-10 grid-rows-5 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-40 gap-y-30'>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-orange-100'>
            <img className='size-20' src={html} alt="" />
            <h1 className='text-2xl mt-10 dark:text-white'>HTML5</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-blue-100'>
            <img src={css} alt="" />
             <h1 className='text-2xl mt-10 size-20 dark:text-white'>CSS</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-yellow-200'>
            <img className='size-20' src={js} alt="" />
             <h1 className='text-2xl mt-10 dark:text-white'>Java Script</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-indigo-100'>
            <img className='size-20' src={react} alt="" />
            <h1 className='text-2xl mt-10 dark:text-white'>ReactJS</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-green-100'>
            <img className='size-20' src={mongodb} alt="" />
             <h1 className='text-2xl mt-10 dark:text-white'>MongoDB</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-gray-950'>
            <img className='size-20' src={express} alt="" />
             <h1 className='text-2xl mt-10 dark:text-white'>ExpressJS</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-green-200'>
            <img className='size-20' src={node} alt="" />
             <h1 className='text-2xl mt-10 dark:text-white'>NodeJS</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-pink-100'>
            <img className='size-20' src={motion} alt="" />
            <h1 className='text-2xl mt-10 dark:text-white'>Framer Motion</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-orange-100'>
            <img className='size-20' src={git} alt="" />
             <h1 className='text-2xl mt-10 dark:text-white'>Git</h1>
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-gray-100'>
            <img className='size-20' src={github} alt="" />
            <h1 className='text-2xl mt-10 dark:text-white'>GitHub</h1>         
        </div>
        <div className='size-30 flex flex-col items-center rounded-full p-7 bg-blue-100'>
            <img className='size-20' src={tailwind} alt="" />
            <h1 className='text-2xl mt-10 dark:text-white'>Tailwind CSS</h1>         
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
