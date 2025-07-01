import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.3 }
};

export const About = () => {
  return (
    <section 
      id="About" 
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20  bg-gradient-to-br from-gray-900 to-[#4a4168]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
        
        {/* Introduction */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed"
        >
          Hello, I'm Ankush Kumar Adhikari, a passionate Web Developer with a keen eye for MERN Stack. 
          With a background in IT, I strive to create impactful and visually stunning Software Solutions 
          that leave a lasting impression.
        </motion.p>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Education */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <FaGraduationCap className="text-purple-600 text-2xl md:text-3xl" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              <motion.div 
                whileHover={cardHover}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500"
              >
                <p className="font-bold text-gray-800 dark:text-white">B.Tech in Computer Science</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">XYZ University, 2021–2025</p>
              </motion.div>
              <motion.div 
                whileHover={cardHover}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500"
              >
                <p className="font-bold text-gray-800 dark:text-white">High School</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">ABC School, 2019–2021</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <FaBriefcase className="text-blue-600 text-2xl md:text-3xl" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                Experience
              </h3>
            </div>
            <div className="space-y-4">
              <motion.div 
                whileHover={cardHover}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <p className="font-bold text-gray-800 dark:text-white">Frontend Intern – Tech Corp</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2024 – Aug 2024</p>
              </motion.div>
              <motion.div 
                whileHover={cardHover}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <p className="font-bold text-gray-800 dark:text-white">Freelance Web Developer</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2023 – Present</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div variants={itemVariants} className="mt-12">
          <div className="flex items-center space-x-3 mb-6">
            <FaCode className="text-green-600 text-2xl md:text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
              Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Git'].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-sm md:text-base text-gray-800 dark:text-white hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};