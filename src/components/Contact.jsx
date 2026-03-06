import { Contact2Icon, Send, User } from 'lucide-react'
import React, { useRef } from 'react'
import contact from '../assets/contact.jpg'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef()

  const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm(
    "service_mzmn6wc",
    "template_5fv69jj",
    formRef.current,
    "buV4o4dpLOsL8d9ua"
  )
  .then(() => {
    alert("Message Sent ✅");
  })
  .catch((err) => {
    console.log(err)
    alert("Error ❌");
  });

  }
  return (
    <div id='contact' className='mt-10 p-5'>
      <div className='flex gap-5 justify-center items-center mb-20'>
        <h1 className='text-4xl dark:text-white'>Contact Me</h1>
        <Contact2Icon className='size-10 text-purple-600'/>
      </div>
      <div className='w-full p-5 flex justify-center'>
        <div className='flex md:flex-row flex-col justify-around items-center rounded-lg w-3/4 gap-10'>
        <div className='w-100 md:w-200'><img src={contact} alt="" /></div>
        <div className='flex flex-col gap-5 items-center justify-center'>
            <p className='text-3xl md:text-6xl dark:text-white'>Let's get in touch 🚀</p>
            <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-3 p-4 bg-white dark:bg-gray-950 rounded-lg'>
                <input className='p-4 md:text-2xl m-5 outline-none text-gray-500' name='user_name' type="text" placeholder=' Enter Your full name' />
                <input className='p-4 md:text-2xl m-5 outline-none text-gray-500' name='user_email' type="email" placeholder='Enter email' required />
                <textarea className='p-4 md:text-2xl m-5 outline-none text-gray-500' name='message' type="text" placeholder='Message' />
                <button type='submit' className='px-5 py-3 flex items-center gap-3 w-35 rounded-lg md:text-2xl text-white font-normal bg-purple-600 cursor-pointer'>Send <Send className='size-5'/> </button>
            </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
