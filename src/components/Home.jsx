import React, { useEffect, useState } from 'react'
import avtar from '../assets/avtar.png'
import { Download, Github, Instagram, Linkedin } from 'lucide-react'
import Resume from '../assets/Surya_Resume.pdf'
import {motion} from 'framer-motion'

const Home = () => {

    const texts = [
        'Frontend Development',
        'Backend Development',
        'Full Stack Development'
    ]

    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [blink, setBlink] = useState(true)
    const [reverse, setReverse] = useState(false)

    useEffect(()=>{
        if(index === texts.length) return;

        const timeout = setTimeout(()=>{
            setSubIndex((prev)=> prev + (reverse ? -1  : 1))
        }, reverse ? 50 : 50)

        if(!reverse && subIndex === texts[index].length + 1){
            setReverse(true)
            setTimeout(()=>{}, 1000)
        }else if(reverse && subIndex === 0){
            setReverse(false)
            setIndex((prev)=> (prev + 1) % texts.length)
        }
        return ()=> clearTimeout(timeout)
    },[subIndex, index, reverse, texts])

    useEffect(()=>{
        const blinkTimeout = setInterval(()=>{
            setBlink((prev)=>!prev)
        }, 500)
        return ()=> clearInterval(blinkTimeout)
    }, [])

    let domain = texts[index].substring(0, subIndex)
    let cursor = blink ? '|' : ' '
  return (
  <motion.div
   
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}

  id='home' className=' flex flex-col w-full max-w-9xl gap-5 bg-white dark:bg-gray-950 justify-center md:flex-row flex-1 px-10 md:justify-around mt-40 items-center'>
      <div className='flex text-center md:text-start flex-col px-20 mt-10 w-2xl md:w-4xl' >
        <h3 className='text-[20px] dark:text-white md:text-2xl mt-5'>Hii <span className='wave'>👋</span></h3>
        <h1 className='text-[20px] dark:text-white md:text-2xl mt-5' >I am Surya Pratap Singh Solanki</h1>
        <h3 className='text-[20px] dark:text-white md:text-2xl mt-5'>I am into <span className='text-purple-600 font-medium'>{domain} {cursor}</span></h3>
        <p className='md:text-[18px] text-[12px] mt-3 dark:text-white text-gray-500'>I focus on developing user-friendly web applications <br /> that meet the client's requirements,<br /> with attention to detail, scalability, and performance.</p>
        <div className='flex justify-center md:justify-start gap-5 mt-5'>
            <a href="https://www.linkedin.com/in/surya-pratap-singh-solanki-03a9a9265?utm_source=share_via&utm_content=profile&utm_medium=member_android"><Linkedin className='hover:text-amber-400 duration-300 dark:text-purple-600 transition-all cursor-pointer size-5' /></a>
            <a href="https://github.com/"><Github className='hover:text-amber-400 duration-300 dark:text-purple-600 transition-all cursor-pointer size-5' /></a>
        </div>
        <div className='flex justify-center md:justify-start'>
            <a href={Resume} Download className='mt-7 text-[18px] bg-yellow-600 text-white font-normal px-7 py-2 dark:border-yellow-600 border rounded-lg cursor-pointer hover:scale-100 transition-transform duration-300 flex gap-5'>Resume <Download/></a>
      </div>
        </div>
      <div className='md:w-1/4 w-2/4 flex justify-center mt-10 object-cover overflow-hidden'>
        <img className=' w-full max-w-9xl rounded-full' src={avtar} alt="" />
      </div>
    </motion.div>
  )
}

export default Home
