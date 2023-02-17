import React, { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';


const SignupModalBody = ({setLoginModal}) => {
    const [imagePrev, setImagePrev]=useState('')
    const [image, setImage]=useState('')

    const addImageHandler=(e)=>{
        const file=e.target.files[0]
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    return (
        <div className="px-6 py-6 lg:px-8">

            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign up  on <span className='text-3xl text-purple-500 '>V</span>ibe
            </h3>

            <div className={imagePrev && 'py-5'}>
                {
                    imagePrev && 
                    <img src={imagePrev} className='h-32 rounded-full w-32 mx-auto' alt='' />
                }

            </div>  

            <form className="space-y-6">
                <div>
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required/>
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email@xyz.com" required/>
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
                <label className=" py-2 my-3 rounded file-selector-button font-medium text-sm  bg-purple-500 bg-opacity-10 hover:bg-opacity-25 w-full dark:text-white  ">
                    <span className="flex items-center justify-center gap-2">
                    <BiImageAdd className='text-xl'/>Add Photo
                    </span >
                    <input onChange={addImageHandler} type="file" accept='image/*' name="file" id="file-input"/>
                </label>

                <button type="submit" className="w-full font-medium py-2 pl-3 pr-4 text-black rounded text-sm  bg-purple-500 items-center bg-opacity-50 hover:bg-opacity-75 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-white">
                    Create account
                </button>

                <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300">
                    Have an account?  
                    <p onClick={()=>setLoginModal(true)} className="text-purple-500 hover:underline cursor-pointer"> Login</p>
                </div>
            </form>
        </div>
    );
};

export default SignupModalBody;