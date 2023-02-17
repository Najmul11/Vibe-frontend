import React from 'react';
import { ImSad } from 'react-icons/im';


const Messages = () => {
    return (
        <div className='h-screen flex py-32 justify-center'>
            <div>
                <div className='flex gap-5 text-4xl text-purple-500 font-semibold'>
                    <ImSad className='text-4xl ' /> Page Not Ready
                </div>
            </div>
            
        </div>
    );
};

export default Messages;