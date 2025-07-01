import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20 bg-gradient-to-br from-gray-900 to-[#4a4168]'>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col justify-start items-start mb-16'
      >
        <h1 className='text-white font-serif text-3xl md:text-5xl font-bold mb-3'>
          Contact Me
        </h1>
        <p className='text-white/80 font-serif text-lg md:text-xl mb-5'>
          Let's connect! Fill out the form below and I'll get back to you soon.
        </p>
      </motion.div>

      <div className='flex justify-center items-center'>
        <motion.div 
          className='bg-gradient-to-br from-[#3a3275] to-[#1a1a2e] w-full md:w-[600px] p-8 rounded-2xl shadow-2xl'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            y: -5,
            boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.3)'
          }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className='text-center py-10'
            >
              <div className='text-green-400 text-5xl mb-4'>✓</div>
              <h3 className='text-white text-2xl font-bold mb-2'>Thank You!</h3>
              <p className='text-white/70'>Your message has been sent successfully.</p>
              <p className='text-white/70'>I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <motion.h2 
                className='text-white text-2xl font-bold mb-8 text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Send Your Message
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className='block text-white/80 text-sm font-medium mb-2' htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full bg-[#ffffff08] border border-[#ffffff15] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder:text-white/30'
                  placeholder='Enter your name'
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className='block text-white/80 text-sm font-medium mb-2' htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-[#ffffff08] border border-[#ffffff15] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder:text-white/30'
                  placeholder='Enter your email'
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className='block text-white/80 text-sm font-medium mb-2' htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className='w-full bg-[#ffffff08] border border-[#ffffff15] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder:text-white/30'
                  placeholder='Your message here...'
                  required
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className='pt-2'
              >
                <motion.button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${isHovered ? 'bg-indigo-600' : 'bg-indigo-500'} shadow-lg`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className='absolute top-1/4 left-10 w-4 h-4 rounded-full bg-indigo-400 opacity-20'
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className='absolute bottom-1/3 right-20 w-6 h-6 rounded-full bg-purple-400 opacity-20'
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default Contact;