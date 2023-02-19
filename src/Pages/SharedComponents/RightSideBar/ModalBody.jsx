import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthProvider';

const ModalBody = ({setLoginModal, setIsLoginModalOpen}) => {
    const {signIn}= useContext(AuthContext)

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')


    const handleLogin=(e)=>{
        console.log(email, password);
        e.preventDefault()
        signIn(email, password)
        .then(res=>{
            setIsLoginModalOpen(false)
        })
        .catch(err=>{console.log(err);})

    }

    return (
        <div className="px-6 py-6 lg:px-8">

            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in to <span className='text-3xl text-purple-500 '>V</span>ibe
            </h3>
            <form onSubmit={handleLogin} className="space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={(e)=>setEmail(e.target.value)}
                     type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}
                     type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>

                <div className="flex justify-start">
                    <Link to='/forget_password'className="text-sm text-purple-500 hover:underline">
                        Forget Password?
                    </Link>
                </div>

                <button type="submit" className="w-full font-medium py-2 pl-3 pr-4 text-black rounded text-sm  bg-purple-500 items-center bg-opacity-50 hover:bg-opacity-75 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-white">
                    Login to your account
                </button>

                <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?  
                    <p onClick={()=>setLoginModal(false)} className="text-purple-500 hover:underline cursor-pointer">
                        Create account</p>
                </div>

            </form>
        </div>
    );
};

export default ModalBody;

