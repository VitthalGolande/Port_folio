import React from 'react'

const services=[
    {id:1,
     title:"Web-design",
     Desciption:"Creating visually appealing and user-friendly web designs."
    },
    {id:2,
        title:"Front-End Development",
        Desciption:"Building responsive and interactive interfaces."
    },
    {id:3,
        title:"Back-End Development",
        Desciption:"Developing server-side logic and databases."
    },
    {id:4,
        title:"Full-Stack Development",
        Desciption:"Combine both front-end and backend developement skills."
    },
    {id:5,
        title:"Content-Writing",
        Desciption:"Writing content for your bussiness and companies."
    },
    {id:6,
        title:"Digital Marketing",
        Desciption:"promote your bussiness with other digital marketing team"
    },

]
const Services = () => {
  return (
    <div className='bg-black text-white py-16' id='services'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
             {services.map(services=>(
               
               <div key={services.id}
               className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                   
                   <div className='text-right text-2×1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                    {services.id}
                   </div>
                   <h3 className='mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    {services.title}
                   </h3>
                   <p className='mt-5 text-gray-300 '>
                    {services.Desciption}
                    </p>
                    <a href="#readMore" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
               </div>
             )
             )}
        </div>
    </div>
    </div>
  )
}

export default Services