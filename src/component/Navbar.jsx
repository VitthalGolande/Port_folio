import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-5 md:px-16 lg:px-34'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            
            <div className='text-2xl font-bold hidden md:inline'>Vitthal</div>
            
            <div className='space-x-6'>
                <a href="#home"    className='hover:text-gray-100'>Home</a>
                <a href="#about"   className='hover:text-gray-100'>About Me</a>
                <a href="#services" className='hover:text-gray-100'>Service</a>
                <a href="#project" className='hover:text-gray-100'>Project</a>
                <a href="#contact" className='hover:text-gray-100'>Contact</a>
                
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar