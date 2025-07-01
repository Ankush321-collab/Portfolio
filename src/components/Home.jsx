import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaLinkedin, FaYoutube, FaReact, FaNode } from "react-icons/fa";
import { SiExpress } from 'react-icons/si';
import { DiMongodb } from "react-icons/di";
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import img from '../../public/image.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

const iconHover = {
  scale: 1.2,
  transition: { duration: 0.2 }
};

const Home = () => {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20  bg-gradient-to-br from-gray-900 to-[#4a4168]'>
        <motion.div 
          className='flex flex-col md:flex-row items-center gap-8 md:gap-16'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Text Content */}
          <div className='w-full md:w-1/2 mt-10 md:mt-24 space-y-4 md:space-y-6 text-center md:text-left'>
            <motion.span 
              variants={itemVariants}
              className='font-bold text-xl md:text-2xl text-purple-600 dark:text-purple-400'
            >
              Welcome to My Portfolio
            </motion.span>
            
            <motion.div 
              variants={itemVariants}
              className='flex flex-col md:flex-row justify-center md:justify-start items-center space-y-2 md:space-y-0 md:space-x-3 text-2xl md:text-4xl font-bold text-gray-800 dark:text-white'
            >
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className='text-red-600 dark:text-red-400'
                strings={["Developer", "Programmer", "Coder", "Designer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className='text-sm md:text-base text-gray-600 dark:text-gray-300 text-justify md:text-left leading-relaxed'
            >
              Passionate full-stack developer specializing in MERN stack applications. 
              I create efficient, scalable, and user-friendly web solutions that 
              solve real-world problems with clean, maintainable code.
            </motion.p>

            {/* Social & Tech Stack Section */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mt-8"
            >
              {/* Social Media */}
              <motion.div 
                whileHover={hoverEffect}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-auto"
              >
                <p className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Connect with me</p>
                <div className="flex justify-center md:justify-start space-x-4 items-center text-2xl">
                  {[
                    { icon: <FaFacebook />, link: 'https://facebook.com', color: 'text-blue-600' },
                    { icon: <FaFacebookMessenger />, link: 'https://messenger.com', color: 'text-blue-500' },
                    { icon: <FaLinkedin />, link: 'https://linkedin.com', color: 'text-blue-700' },
                    { icon: <FaYoutube />, link: 'https://youtube.com', color: 'text-red-600' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={iconHover}
                      className={`${social.color} hover:scale-110 transition-transform`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div 
                whileHover={hoverEffect}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full md:w-auto"
              >
                <h1 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Current tech stack</h1>
                <div className="flex justify-center md:justify-start space-x-4 items-center text-2xl">
                  {[
                    { icon: <FaReact />, color: 'text-blue-400', tooltip: 'React' },
                    { icon: <DiMongodb />, color: 'text-green-500', tooltip: 'MongoDB' },
                    { icon: <SiExpress />, color: 'text-gray-700 dark:text-gray-300', tooltip: 'Express' },
                    { icon: <FaNode />, color: 'text-green-600', tooltip: 'Node.js' }
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={iconHover}
                      className={`${tech.color} hover:scale-110 transition-transform relative group`}
                      title={tech.tooltip}
                    >
                      {tech.icon}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {tech.tooltip}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className='w-full md:w-1/2 flex justify-center items-center p-4'
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-purple-500 dark:border-purple-400 shadow-lg '
              src={img} 
              alt="Profile" 
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.hr 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 dark:border-gray-700 my-8"
      />
    </>
  )
}

export default Home;