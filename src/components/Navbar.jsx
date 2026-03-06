import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import {Menu, Sun, Moon, X, ChevronLeft, Slash, ChevronRight} from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
    
        if (savedTheme === "dark") {
          setDarkMode(true)
          document.documentElement.classList.add("dark")
        }
      }, [])

      useEffect(() => {
          if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
          } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
          }
        }, [darkMode])

  return (
      <div className='flex justify-between items-center fixed max-w-7xl mx-auto px-4 h-20 top-0 shadow-2xl bg-white dark:bg-gray-950 dark:text-white'>
      <div className=' items-center flex '><h1 className='text-4xl text-yellow-600 flex items-center'><ChevronLeft/>S.P<ChevronRight/></h1></div>
      <div className='p-5 hidden md:flex gap-6 text-2xl'>
        <a className='hover:text-amber-400 duration-300 transition-all' href="#home">Home</a>
        <a className='hover:text-amber-400 duration-300 transition-all' href="#about">About</a>
        <a className='hover:text-amber-400 duration-300 transition-all' href="#project">Projects</a>
        <a className='hover:text-amber-400 duration-300 transition-all' href="#skills">Skills</a>
        <a className='hover:text-amber-400 duration-300 transition-all' href="#education">Education</a>
        <a className='hover:text-amber-400 duration-300 transition-all' href="#contact">Contact</a>
      </div>
      <button onClick={()=>{setDarkMode(!darkMode)}} className='hover:text-amber-400 cursor-pointer duration-300 transition-all' href="">
          {darkMode ? <Sun size={30} /> : <Moon size={30} />}
         </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>


      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 md:hidden shadow-lg">
          <a>Home</a>
          <a>About</a>
          <a>Projects</a>
          <a>Education</a>
          <a>Contact</a>
        </div>
      )}
    </div>
  )
}

export default Navbar
