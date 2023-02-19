import React, { useContext, useState } from 'react'
import { BiImageAdd } from 'react-icons/bi';
import { AuthContext } from '../../Contexts/AuthProvider';
import Nav from '../SharedComponents/Nav/Nav'
import EditModal from './EditModal'
import PhotoChangeModal from './PhotoChangeModal';

export const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useContext(AuthContext)
    console.log(user);
 
  return (
    <div>
        <Nav/>
        <div className='container py-10 mx-auto'>
            <div className=' w-3/5 mx-auto'>

                <div className='flex justify-end w-full'>
                    <label onClick={()=>setIsModalOpen(true)} htmlFor='edit-profile-modal' className='bg-purple-500 bg-opacity-10 hover:bg-opacity-50 p-2 rounded-md text-sm font-medium cursor-pointer'>
                        Edit profile
                    </label>
                </div>

                <div className='flex gap-10  items-center'>
                    <div>
                        <img src={user?.photoURL} className='w-56 h-56 rounded-full' alt="" />
                        <label onClick={()=>setIsModalOpen(true)}
                         htmlFor='change-photo-modal' className=" py-2 my-3 rounded file-selector-button font-medium text-sm  bg-purple-500 bg-opacity-10 hover:bg-opacity-25 w-full ">
                            <span className="flex items-center justify-center gap-2">
                            <BiImageAdd className='text-xl'/>Change Photo
                            </span >
                        </label>

                    </div>
                            
                    <div className='flex flex-col gap-2'>

                        <div className='flex gap-3 items-center'>
                            <span className='text-gray-600 text-sm'>Name </span>
                            <span className='font-medium'>{user?.displayName}</span>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <span className='text-gray-600 text-sm'>Email </span>
                            <span className='font-medium'>{user?.email}</span>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <span className='text-gray-600 text-sm'>University </span>
                            <span className='font-medium'>{user.university}</span>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <span className='text-gray-600 text-sm'>Address</span>
                            <span className='font-medium'>{user.address}</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        {
            isModalOpen &&
            <>
            <EditModal setIsModalOpen={setIsModalOpen} isLoading={isLoading} setIsLoading={setIsLoading}/>
            <PhotoChangeModal setIsModalOpen={setIsModalOpen}  isLoading={isLoading} setIsLoading={setIsLoading}/>
            </>
        }
    </div>
  )
}
