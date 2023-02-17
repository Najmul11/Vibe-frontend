import React,{useState} from 'react'
import { BiImageAdd } from 'react-icons/bi';
import PostModal from './PostModal';

export const Home = () => {
  const [postText, setPostText]=useState('')

  const user={
    name:"Najmul"
  }
  return (
    <div className='p-5 rounded-md border border-gray-200'>
      <div className='flex items-center gap-5 border-b pb-5'>
          <img src="https://picsum.photos/200/300" alt="" className='rounded-full w-10 h-10' />
          <label htmlFor='post-modal' className='cursor-pointer flex items-center text-start w-full text-gray-600 h-10 bg-gray-200 hover:bg-gray-300 rounded-full px-5'>
            {
                postText ? <>{postText}</> :<>
                  Whats's on your mind, {user.name}?
                </>
            }
          </label>
      </div>
      <div className='py-5 flex justify-center'>
        <label htmlFor='post-modal' className='cursor-pointer flex py-2 px-3 rounded gap-3 bg-purple-500 items-center bg-opacity-10 hover:bg-gray-200'>
          <BiImageAdd className='text-2xl'/><span className='font-medium'>Image</span>
        </label>
      </div>
      <PostModal setPostText={setPostText}/>
    </div>

 
  )
}
