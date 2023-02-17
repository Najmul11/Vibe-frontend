import React from 'react';
import {FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import {BiHash } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const LeftSideBar = () => {
    const user={
        name:"Najmul Pro"
    }
    return (
        <>
            {
                user ?
                <div >

                    <div className='flex items-center gap-5 border-b border-purple-600 border-opacity-10 px-5 py-3'>
                        <img src="https://picsum.photos/200/300" alt="" className='rounded-full w-12 h-12 focus:ring-blue-800 border-4 border-purple-500' />
                        <div>
                            <span className='font-semibold'>{user?.name}</span>
                            <p className='text-gray-400'>2 friends</p>
                        </div>
                    </div>

                    <div className='px-5 py-3'>
                        <div className='flex justify-between font-semibold text-sm border-b border-purple-600 border-opacity-10 py-3'>
                            <p>Profile viewd by</p>
                            <p>125</p>
                        </div>
                        <div className='py-5'>
                            <h4 className="text-lg font-sans font-semibold">Social Profiles</h4>

                            <div className='flex flex-col gap-5 mt-5'>
                                <div className="flex items-center gap-5">
                                    <FaTwitter className='text-3xl'/>
                                    <div>
                                        <span className='font-semibold'>Twitter</span>
                                        <p className='text-gray-400'>Social Network</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <FaLinkedin className='text-3xl'/>
                                    <div>
                                        <span className='font-semibold'>Linkedin</span>
                                        <p className='text-gray-400'>Network Platform</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <FaDiscord className='text-3xl'/>
                                    <div>
                                        <span className='font-semibold'>Discord</span>
                                        <p className='text-gray-400'>Social Network</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                :
                <div className='py-3 '>
                   <Link to='/media' className='text-xl font-semibold'>
                        <button className='flex gap-6 items-center py-3 px-6 rounded-full   hover:bg-gray-200'>
                            <BiHash/> Explore
                        </button>
                   </Link>
                </div>
            }
        </>
    );
};

export default LeftSideBar;