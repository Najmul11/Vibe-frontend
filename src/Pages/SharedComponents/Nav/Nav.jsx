import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DarkContext } from '../../../App';
import { IoMdArrowDropdown} from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageSquareDetail, BiLogOut} from 'react-icons/bi';
import { MdOutlinePermMedia} from 'react-icons/md';
import { HiSun,HiOutlineMoon} from 'react-icons/hi';
import './Nav.css'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Nav = () => {
    const {darkMode, handleDarkMode}=useContext(DarkContext)
    const {user,  logout}= useContext(AuthContext)

    const handleLogout=()=>{
        logout()
        .then(result=>{})
        .catch(error=>{})
    }

    return (
        
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-5xl text-purple-600'>V</span>ibe</span>
                </Link>
                <div className="flex md:order-2">

                    {
                        user && 
                       <div className='flex gap-3 items-center'>
                        <NavLink to='/about' className="flex py-2 pl-3 pr-4 text-black rounded text-lg bg-purple-500 items-center bg-opacity-10 hover:bg-gray-200 dark:bg-gray-200 dark:bg-opacity-50">
                        <span className='text-sm font-semibold'>About</span><IoMdArrowDropdown/>
                        </NavLink>
                        <button onClick={handleLogout} className="flex  py-2 pl-3 pr-4 text-black rounded text-lg bg-purple-500 items-center bg-opacity-10 hover:bg-gray-200 dark:bg-gray-200 dark:bg-opacity-50">
                        <span className='text-sm font-semibold'>Logout</span><BiLogOut/>
                        </button>
                       </div>
                    }

                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-white dark:bg-opacity-50 dark:border-gray-700 ">
                                
                        <li>
                            <NavLink to={'/'} className={`block py-2 pl-3 pr-4 text-black rounded  text-lg dark:hover:bg-gray-100 dark:hover:bg-opacity-10 hover:bg-gray-200`}>
                                <AiOutlineHome/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/media' className="block py-2 pl-3 pr-4  rounded  text-lg dark:hover:bg-gray-100 dark:hover:bg-opacity-10 hover:bg-gray-200">
                                <MdOutlinePermMedia/>
                            </NavLink>
                        </li>
                        {
                            user &&
                            <li>
                                <NavLink to='/messages' className="block py-2 pl-3 pr-4 text-black rounded text-lg dark:hover:bg-gray-100 dark:hover:bg-opacity-10 hover:bg-gray-200">
                                    <BiMessageSquareDetail/>
                                </NavLink>
                            </li>
                        }
                        <button onClick={handleDarkMode} className="block py-2 pl-3 pr-4 text-black rounded  text-lg dark:hover:bg-gray-100 dark:hover:bg-opacity-10 hover:bg-gray-200">
                                {
                                    darkMode ? <HiSun/>: <HiOutlineMoon/>
                                }
                        </button>
                    </ul>

                </div>
            </div>
        </nav>


    );
};

export default Nav;
