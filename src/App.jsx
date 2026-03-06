import React from 'react'
import Navbar from './components/Navbar'
import  Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='dark:bg-gray-950 h-screen flex flex-col'>
     <Navbar />
     <Home />
     <About />
     <Skills/>
     <Project />
     <Education />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
