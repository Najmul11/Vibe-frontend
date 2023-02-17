import React from 'react';
import {Link} from 'react-router-dom'
import { RiErrorWarningFill } from 'react-icons/ri';


const Error = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div>
                <div className='flex gap-5 text-5xl text-purple-500 font-semibold'>
                    <RiErrorWarningFill className='text-5xl ' /> Page Not Found
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <Link to='/' className='bg-purple-500 bg-opacity-10 hover:bg-opacity-25 p-2 rounded-lg'>Go Home</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Error;