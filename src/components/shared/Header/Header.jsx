import { Link,  } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

import {
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <div className='w-full md:w-5/6 mx-auto px-3'>
        <div className=' py-5 mx-auto '>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <img className=' h-20' src={logo} alt="" />
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-12 lg:flex text-lg'>
                
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/about">Services</Link>
                </li>
                <li>
                    <Link to="/about">Blog</Link>
                </li>
                <li>
                    <Link to="/about">Contact</Link>
                </li>
                
                </ul>

                <div className='flex justify-center items-center gap-3'>
                    {/* <img className='w-11 h-11 rounded-full' src=''  alt="" /> */}
                    
                    

                    <Link to='/login' className='inline-flex md:block items-center'>
                    <button className='btn btn-outline btn-error'>Appointment</button>
                    </Link>
                </div>

                {/* Mobile Navbar Section */}
                <div className='lg:hidden '>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3Icon className='w-5 text-gray-500' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10 '>
                    <div className='p-5 bg-slate-900 text-white border rounded shadow-sm'>
                        {/* Logo & Button section */}
                        <div className='flex items-center justify-between mb-4'>
                        <div>
                            <Link to='/' className='inline-flex items-center'>
                                <img src='' alt="" />
                            </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                            <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <XMarkIcon className='w-5 text-gray-500' />
                            </button>
                        </div>
                        </div>
                        {/* Mobile Nav Items Section */}
                        <nav>
                        <ul className='space-y-4 text-white'>
                            <li>
                            <Link to='/' className='default'>
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/Blog'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Blog
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/login'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Login
                            </Link>
                            </li>
                        </ul>
                        
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;