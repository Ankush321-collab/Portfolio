import React from 'react'
import html from '../../public/html.png'
import javascript from '../../public/javascript.png'
import oracle from '../../public/oracle.png'
import css from '../../public/css.jpg'
import java from '../../public/java.png'
import springboot from '../../public/springBoot.jpg'
import spring from '../../public/spring.png'
import { ReactTyped } from "react-typed";
import { img } from 'framer-motion/client'


const Experience = () => {
    const item=[
        {
            id:1,
            logo:html,
            name:"Html"
        },
        {
            id:2,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:3,
            logo:oracle,
            name:"Oracle"
        },
        {
            id:4,
            logo:css,
            name:"CSS"
        },
        {
            id:5,
            logo:springboot,
            name:"springboot"
        },
        {
            id:6,
            logo:spring,
            name:"Spring"
        },
        {
            id:7,
            logo:java,
            name:"Java"
        },
    ]
  return (


    
     <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20  bg-gradient-to-br from-gray-900 to-[#4a4168] '>
            <div className='mt-5 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"'>
               <h1 className=' dark:text-white font-serif  text-3xl font-bold mb-5'>Experience</h1> 
              <ReactTyped
                    className='text-red-600 dark:text-red-400 u text-xl'
                    strings={["I Have More Than 2 Years of Experience In Below Technology"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />   
             </div>
    
                 <div className='flex gap-4  flex-wrap  md:gap-12 md:m-5 max-
                 w-screen-2xl max-h-screen-2xl p-4   '>

                   
                   {item.map(({ id, logo, name }) => (
  <div
    key={id}
    className='w-full sm:w-[300px] p-4 rounded-full shadow-md hover:scale-105 bg-transparent border hover:bg-blue-300 hover:text-red-400'
  >
    <img
      className='w-32 h-32 rounded-full object-cover mx-auto'
      src={logo}
      alt={name}
    />
    <h1 className='text-center font-semibold mt-4 text-white'>{name}</h1>
  </div>
))}

                    </div>
                     </div>
                    
    
  )
}

export default Experience