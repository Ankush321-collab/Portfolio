import React, { useState } from 'react'
import pic from '../../public/photo.avif'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    // array for navbar items
    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contacts" }
    ];
    
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-lg fixed top-0 left-0 right-0   bg-teal-400 text-white'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo section with 3D tilt effect */}
                    <div className='flex space-x-2 group'>
                        <img 
                            src={pic} 
                            alt="logo"  
                            className='h-12 w-12 rounded-full object-cover 
                                      border-2 border-teal-400 
                                      transition-all duration-300 
                                      group-hover:rotate-6 group-hover:scale-110 
                                      group-hover:border-teal-600 
                                      group-hover:shadow-lg' 
                        />
                        <div className='transform transition-all duration-500 group-hover:-translate-y-1'>
                            <h1 className='font-bold text-xl cursor-pointer'>
                                Ankus<span className='text-teal-500 text-2xl'>h</span>
                            </h1>
                            <p className='text-sm bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent'>
                                Web developer
                            </p>
                        </div>
                    </div>
                    
                    {/* Desktop navbar */}
                    <div className='flex items-center'>
                        <ul className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <li 
                                    key={item.id} 
                                    className={`relative px-2 py-1 transition-all duration-300 cursor-pointer 
                                               ${activeItem === item.id ? 'text-teal-600' : 'text-gray-700 hover:text-teal-500'}
                                               group`}
                                    onMouseEnter={() => setActiveItem(item.id)}
                                    onMouseLeave={() => setActiveItem(null)}
                                >
                                    <span className='relative z-10'>{item.text}</span>
                                    {activeItem === item.id && (
                                        <span className="absolute inset-0 bg-teal-100 rounded-lg 
                                                        transform scale-105 -z-0 opacity-70 
                                                        transition-all duration-300"></span>
                                    )}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 
                                                    transform origin-left scale-x-0 transition-transform 
                                                    duration-300 ${activeItem === item.id ? 'scale-x-100' : 'group-hover:scale-x-75'}`}></span>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Mobile menu button with animation */}
                        <div 
                            className='md:hidden ml-4 p-2 rounded-full transition-all duration-300 
                                      hover:bg-teal-100 active:scale-95'
                            onClick={() => setMenu(!menu)}
                        >
                            {menu ? (
                                <RxCross1 className='size-6 text-teal-600 animate-spin-once' />
                            ) : (
                                <GiHamburgerMenu className='size-6 text-gray-700 hover:text-teal-600' />
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Mobile menu with sliding animation */}
                {menu && (
                    <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 
                                   flex items-center justify-center 
                                   ${menu ? 'animate-fade-in-up' : 'animate-fade-out-down'}`}
                         style={{ marginTop: '4rem' }}
                    >
                        <ul className="flex flex-col items-center space-y-8">
                            {navItems.map((item) => (
                                <li 
                                    key={item.id} 
                                    className="relative"
                                    onClick={() => setMenu(false)}
                                >
                                    <a 
                                        href={`#${item.text.toLowerCase()}`} 
                                        className="text-2xl font-medium px-4 py-2 
                                                  text-gray-800 hover:text-teal-600 
                                                  transition-all duration-300 
                                                  hover:scale-105 active:scale-95"
                                    >
                                        {item.text}
                                    </a>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 
                                                    bg-gradient-to-r from-teal-400 to-teal-600 
                                                    transform scale-x-0 hover:scale-x-100 
                                                    transition-transform duration-500"></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar;