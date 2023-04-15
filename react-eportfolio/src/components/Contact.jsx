import React from 'react'
import './style.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_mp3i7i8', 'template_v6e8ftf', refForm.current, 'hq2pzKioLRUws_3P5')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div name='contact' className='w-full md:h-screen flex flex-col pt-16 justify-center items-center p-4 text-white'>
        <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>"Grab a coffee and chat with me!"</p>
                <p className='py-4 text-center'>&lt;Submit the form below or shoot me an email - homytuyet.env@gmail.com&gt;</p>
        </div>
        <form ref={refForm} className='flex flex-col max-w-[600px] w-full border p-3' onSubmit={sendEmail}>
            <input className='bg-transparent border-b-2 p-2 rounded' type="text" placeholder='Name' name='name' />
            <input className='my-4 border-b-2 p-2 rounded bg-transparent' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-transparent border-b-2 p-2 rounded' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-3 mx-auto flex items-center butborder'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact