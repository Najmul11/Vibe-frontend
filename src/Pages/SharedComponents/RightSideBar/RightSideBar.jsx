import React,{useState, useContext} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import {FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LoginModal from './LoginModal';
import axios from 'axios';
import toast from 'react-hot-toast'




export const RightSideBar = () => {
    const [isLoginModalOpen, setIsLoginModalOpen]=useState(false)
    const {signInWithGoogle,user}= useContext(AuthContext)

    const location=useLocation()
    const navigate=useNavigate()

    const from=location.state?.from?.pathname || '/'


    const handleLoginModal= ()=>{
        setIsLoginModalOpen(true)
    }

    const handleGoogleSignin = ()=>{
        signInWithGoogle()
        .then(res=>{
            const user={name:res.user.displayName, email:res.user.email, avatar:res.user.photoURL, uid:res.user.uid}
            axios.post('http://localhost:5000/users',user)
            .then(res=>{
                toast.success('Welcome back')
                setIsLoginModalOpen(false)
            })
            navigate(from, {replace:true})  
        })
        .catch(err=>{})
    }

  return (
    <>
        {
            user ? 
            <div>
                <div className='px-5 py-3 border-b border-purple-600 border-opacity-10'>
                    <div className='text-lg font-sans font-semibold py-3'>
                        <p>Friend list</p>
                    </div>
                </div>
                <div className='flex items-center shadow-sm gap-5 px-5 py-3'>
                    <img src={user?.photoURL} alt="" className='rounded-full w-10 h-10' />
                    <div>
                        <span className='font-semibold'>{user?.displayName}</span>
                    </div>
                </div>
                <div className='flex items-center shadow-sm  gap-5 px-5 py-3'>
                    <img src={user?.photoURL} alt="" className='rounded-full w-10 h-10' />
                    <div>
                    <span className='font-semibold'>{user?.displayName}</span>
                    </div>
                </div>
            </div>
            :
            <div className='py-2 flex flex-col gap-4'>

                <div>
                    <h2 className='font-bold text-2xl m'>New to Vibe?</h2>
                    <p className='text-gray-400'>Sign up now to get your own personalized timeline!</p>
                </div>

                <button onClick={handleGoogleSignin} className='flex items-center justify-center gap-2 py-3 px-6 rounded-full border-1 font-semibold border border-gray-300 w-full   hover:bg-gray-200'>
                    <FaGoogle/> Login with Google
                </button>

                <div className='flex gap-2'>
                    <label  onClick={handleLoginModal} htmlFor="login-modal" className="cursor-pointer text-center py-3 px-6 rounded-full border-1 font-semibold border              border-gray-300 w-full hover:bg-gray-200">
                        Login
                    </label>
                </div>

                <p className='text-gray-400'>
                    By signing up, you agree to the <Link to='/tos' className='hover:underline text-purple-500'>Terms of Service</Link> and <Link to='/privacy' className='hover:underline text-purple-500'> Privacy Policy</Link>,
                    including <Link to='/cookie' className='hover:underline text-purple-500'>Cookie Use</Link>.
                </p>

                <span className='text-gray-400'>?? {new Date().getFullYear()} Vibe, Inc.</span>
            </div>
        }
        {
            isLoginModalOpen && 
            <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />
        }
       
         

    </>
  )
}
