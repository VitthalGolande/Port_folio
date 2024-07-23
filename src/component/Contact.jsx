import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-16' id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>
            <div className='flex flex-col md:flex-row item-center md:space-x-12'>
             <div className='flex-1 pt-20'>
                 <h3>Let's Talk</h3>
                 <p>I'm open to discussing web development projects or partnership opportunities.</p>    
                 <div className='mb-4 mt-8'>
                  <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                  <a href="mailto:youremail@example.com" className='hover:underline'>
                    vitthalgolande9595@gmail.com
                  </a>
                  </div> 
                  <div className='mb-4'>
                   <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                   <span>7666571301</span>
                  </div>
                  <div className='mb-4'>
                  <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                  <span>Rayakarmala, Dhayari, Pune, India</span>
                  </div> 
             </div>
             <div className='flex-1 w-full'>
                <form className='space-y-4'>
                  <div>
                    <label htmlFor="name" className='mb-8'>Name</label>
                    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your Name'/>
                  </div>
                  <div>
                    <label htmlFor="email" className='mb-8'>E-mail</label>
                    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your e-mail address'/>
                  </div>
                  <div>
                    <label htmlFor="massage" className='block mb-8'>Massage</label>
                    <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your massage'
                    />
                  </div>
                  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
        
                </form>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Contact