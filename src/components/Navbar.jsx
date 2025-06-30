import React, { useState, useEffect } from 'react';
import pic from '../../public/photo.avif';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navbar items
    const navItems = [
        { id: 1, text: "Home", icon: "🏠" },
        { id: 2, text: "About", icon: "👨‍💻" },
        { id: 3, text: "Portfolio", icon: "🎨" },
        { id: 4, text: "Experience", icon: "📈" },
        { id: 5, text: "Contact", icon: "📱" }
    ];

    // Animation variants
    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0, y: -20 }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05 }
    };

    return (
        <>
            <motion.div 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#6e659e]/90 backdrop-blur-md shadow-xl' : 'bg-[#6e659e]'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            >
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-br from-gray-800 to-[#4a4168]'>
                    <div className='flex justify-between items-center h-16 md:h-20'>
                        {/* Logo with 3D tilt and glow effect */}
                        <motion.div 
                            className='flex space-x-2 group cursor-pointer'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.img 
                                src={pic} 
                                alt="logo"  
                                className='h-12 w-12 rounded-full object-cover 
                                          border-2 border-teal-400 shadow-lg
                                          transition-all duration-500 
                                          group-hover:rotate-[10deg] group-hover:scale-110 
                                          group-hover:border-teal-300 
                                          group-hover:shadow-teal-400/50' 
                                whileHover={{ rotate: 10, scale: 1.1 }}
                            />
                            <motion.div 
                                className='transform transition-all duration-500 group-hover:-translate-y-1'
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className='font-bold text-xl cursor-pointer text-yellow-100 hover:text-white'>
                                    Ankus<span className='text-teal-300 text-2xl'>h</span>
                                </h1>
                                <p className='text-sm bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent'>
                                    Web Developer
                                </p>
                            </motion.div>
                        </motion.div>
                        
                        {/* Desktop navbar with animated underline */}
                        <nav className='hidden md:block'>
                            <ul className="flex space-x-6">
                                {navItems.map((item) => (
                                    <motion.li 
                                        key={item.id} 
                                        className="relative px-3 py-2"
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        variants={navItemVariants}
                                        onMouseEnter={() => setActiveItem(item.id)}
                                        onMouseLeave={() => setActiveItem(null)}
                                    >
                                        <motion.a
                                            href={`#${item.text.toLowerCase()}`}
                                            className={`flex items-center gap-2 text-lg font-medium transition-colors
                                                      ${activeItem === item.id ? 'text-white' : 'text-gray-100 hover:text-teal-200'}`}
                                        >
                                            <span className="text-sm">{item.icon}</span>
                                            {item.text}
                                        </motion.a>
                                        
                                        {activeItem === item.id && (
                                            <motion.span 
                                                className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 rounded-full"
                                                layoutId="navUnderline"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        
                        {/* Mobile menu button with morphing animation */}
                        <motion.button
                            className='md:hidden ml-4 p-2 rounded-full bg-white/10 backdrop-blur-sm'
                            onClick={() => setMenu(!menu)}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode='wait'>
                                {menu ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <RxCross1 className='size-6 text-teal-300' />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <GiHamburgerMenu className='size-6 text-teal-300' />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
                
                {/* Mobile menu with sliding animation */}
                <AnimatePresence>
                    {menu && (
                        <motion.div 
                            className='md:hidden fixed inset-0 bg-[#6e659e]/95 backdrop-blur-lg z-40 pt-20'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ type: 'spring', damping: 25 }}
                        >
                            <motion.ul 
                                className="flex flex-col items-center space-y-8 px-4 py-8"
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {navItems.map((item) => (
                                    <motion.li 
                                        key={item.id}
                                        variants={navItemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full text-center"
                                    >
                                        <a 
                                            href={`#${item.text.toLowerCase()}`}
                                            className="flex items-center justify-center gap-3 text-2xl font-medium px-6 py-3 
                                                      text-white hover:text-teal-200 rounded-xl
                                                      transition-all duration-300 hover:bg-white/10 w-full"
                                            onClick={() => setMenu(false)}
                                        >
                                            <span className="text-xl">{item.icon}</span>
                                            {item.text}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default Navbar;