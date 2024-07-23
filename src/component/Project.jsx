import React from 'react'
import img1 from '/img1.jpg'
import img2 from '/img2.jpg'
import img3 from '/img3.jpg'
const projects=[
    {   id:1,
        name:"Employee MS",
        technologies:"MERN Stack",
        image:img1,
        github:"https://github.com/VitthalGolande?tab=repositories"
    },
    {   id:2,
        name:"Online Shopping MS",
        technologies:"MERN Stack",
        image:img2,
        github:"https://github.com/VitthalGolande?tab=repositories"
    },
    {   id:3,
        name:"Pck & drop Courier MS",
        technologies:"MERN Stack",
        image:img3,
        github:"https://github.com/VitthalGolande?tab=repositories"
    }
]

const Project = () => {
  return (
    <div className='bg-black text-white py-16' id='project'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             
             {projects.map((projects)=>(
              <div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <img src={projects.image} alt={projects.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
                <h3 className='text-2×1 font-bold mb-2'>{projects.name}</h3>
                <p className='text-gray-400 mb-4'>{projects.technologies}</p>
                <a href={projects.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-400 px-4 py-2 rounded-full 'target='_blank' rel='noopener noreferrer'>Github</a>
              </div>
            ))}
         

        </div>
    </div>
    </div>
  )
}

export default Project