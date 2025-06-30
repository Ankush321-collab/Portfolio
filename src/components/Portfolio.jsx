import React from 'react'
import { ReactTyped } from "react-typed";
import mongodb from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import react from '../../public/reactjs.png'
import node from '../../public/node.png'
import java from '../../public/java.png'
import python from '../../public/python.webp'


const Portfolio = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20  bg-gradient-to-br from-gray-900 to-[#4a4168]'>
        <div className='mt-5 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"'>
           <h1 className=' dark:text-white font-serif  text-3xl font-bold mb-5'>Portfolio</h1> 
<ReactTyped
                className='text-red-600 dark:text-red-400 u text-xl'
                strings={["Featured project..."]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />        </div>

             <div className='flex gap-4  flex-wrap  md:gap-12 md:m-5 max-w-screen-2xl max-h-screen-2xl p-4 '>

  {/* Card 1 */}
  <div className='bg-yellow-100 w-full sm:w-[300px] p-4 rounded-md shadow-md hover:scale-105'>
    <img 
      className='w-32 h-32 rounded-full object-cover mx-auto'
      src={mongodb} 
      alt="MongoDB" 
    />
    <h1 className='font-serif text-xl text-center mt-4'>MongoDB</h1>
    <p className='text-sm text-gray-700 text-center mt-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequatur!
    </p>
    <div className='flex justify-between mt-4'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View</button>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Source Code</button>
    </div>
  </div>

  {/* Card 2 */}
  <div className='bg-fuchsia-300 w-full sm:w-[300px] p-4 rounded-md shadow-md hover:scale-105'>
     <img 
      className='w-32 h-32 rounded-full object-cover mx-auto'
      src={express} 
      alt="MongoDB" 
    />
    <h1 className='font-serif text-xl text-center mt-4'>Express</h1>
    <p className='text-sm text-gray-700 text-center mt-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequatur!
    </p>
    <div className='flex justify-between mt-4'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View</button>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Source Code</button>
    </div>
  </div>

  {/* Card 3 */}
  <div className='bg-slate-500 w-full sm:w-[300px] p-4 rounded-md shadow-md text-white hover:scale-105'>
     <img 
      className='w-32 h-32 rounded-full object-cover mx-auto'
      src={react} 
      alt="MongoDB" 
    />
    <h1 className='font-serif text-xl text-center mt-4'>React</h1>
    <p className='text-sm text-gray-700 text-center mt-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequatur!
    </p>
    <div className='flex justify-between mt-4'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View</button>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Source Code</button>
    </div>
  </div>

  {/* Card 4 */}
  <div className='bg-white w-full sm:w-[300px] p-4 rounded-md shadow-md text-center hover:scale-105'>
     <img 
      className='w-32 h-32 rounded-full object-cover mx-auto'
      src={node} 
      alt="MongoDB" 
    />
    <h1 className='font-serif text-xl text-center mt-4'>Node</h1>
    <p className='text-sm text-gray-700 text-center mt-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequatur!
    </p>
    <div className='flex justify-between mt-4'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View</button>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Source Code</button>
    </div>
  </div>

  {/* Card 5 */}
  <div className=' w-full sm:w-[300px] p-4 rounded-md shadow-md text-center hover:scale-105 bg-gray-400'>
     <img 
      className='w-32 h-32 rounded-full object-cover mx-auto'
      src={java} 
      alt="MongoDB" 
    />
    <h1 className='font-serif text-xl text-center mt-4'>Java</h1>
    <p className='text-sm text-gray-700 text-center mt-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequatur!
    </p>
    <div className='flex justify-between mt-4'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View</button>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Source Code</button>
    </div>
  </div>

  <div className=' w-full sm:w-[300px] p-4 rounded-md shadow-md text-center hover:scale-105 bg-indigo-300'>
     <img 
      className='w-32 h-32 rounded-full object-cover mx-auto'
      src={python} 
      alt="MongoDB" 
    />
    <h1 className='font-serif text-xl text-center mt-4'>Python</h1>
    <p className='text-sm text-gray-700 text-center mt-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequatur!
    </p>
    <div className='flex justify-between mt-4'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View</button>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Source Code</button>
    </div>
  </div>

</div>

              
    </div>
  )
}

export default Portfolio