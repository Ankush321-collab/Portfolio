import { hr } from 'framer-motion/m'
import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <hr/>
    <div>
  <footer className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20  bg-gradient-to-br from-gray-900 to-[#4a4168] '>
        <div className='flex gap-6 text-4xl justify-center items-center px-10 py-12 text-white'>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedin/>
        </div>
        <hr/>
        <br />
        <div className='flex flex-col gap-6  justify-center items-center m-5 text-white px-10 py-12 '> 
            <p>@2025 Your company.All rights reserved</p>
            
            <p>Supportive partner Ankush</p>
        </div>
        


    </div>

  </footer>
    </div>
    </>
  )
}

export default Footer