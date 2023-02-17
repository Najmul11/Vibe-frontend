import React, { useState } from 'react';
import "./FileInput.css";
import { BiImageAdd } from 'react-icons/bi';


const PostModal = ({setPostText}) => {
    const [imagePrev, setImagePrev]=useState('')
    const [image, setImage]=useState('')

    const user={
        name:'Naz'
    }

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
        <div>
            <input  type="checkbox" id="post-modal" className="modal-toggle" />
            <label htmlFor="post-modal" className="modal cursor-pointer ">
                <label className="modal-box relative dark:bg-gray-800 dark:text-white" htmlFor="">
                    <h3 className="text-lg font-bold text-center pb-3 border-b border-purple-500 border-opacity-25">Create post</h3>
                    <div>
                        <div className='flex items-center gap-5 px-5 py-3'>
                            <img src="https://picsum.photos/200/300" alt="" className='rounded-full w-10 h-10' />
                            <div>
                                <span className='font-semibold'>{user?.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <input onChange={(e)=>setPostText(e.target.value)}
                        className='w-full bg-gray-300 rounded-lg  border-0 focus:border-0 focus:ring-gray-50 outline-0 px-3 py-3 dark:text-black'
                        name="postText" id="post-text" cols="30" rows="6"
                        placeholder={`Whats's on your mind?`}
                        />
                    </div>
                    <div className='px-5'>
                        <div className={imagePrev && 'py-5'}>
                            {
                                imagePrev && 
                                <img src={imagePrev} className='h-32 mx-auto' alt='' />
                            }

                        </div>  
                        <label className=" py-2 my-3 rounded file-selector-button font-medium text-sm bg-purple-500 bg-opacity-10 hover:bg-opacity-25 w-full ">
                            <span className="flex items-center justify-center gap-2">
                            <BiImageAdd className='text-xl'/>Add Image
                            </span >
                            <input onChange={addImageHandler} type="file" accept='image/*' name="file" id="file-input"/>
                        </label>
                    </div>
                    <div className='px-5'>
                        <button className='py-2 my-3 rounded file-selector-button font-medium text-center text-sm  bg-purple-500 bg-opacity-75 hover:bg-opacity-100 w-full'>
                            Post
                        </button>
                    </div>
                    <div className="modal-action px-5">
                        <label htmlFor="post-modal" className="cursor-pointer font-medium py-2 pl-3 pr-4 text-black rounded text-sm  bg-purple-500 items-center bg-opacity-10 hover:bg-opacity-25 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-white">
                            Cancel
                        </label>
                    </div>
                </label>    
            </label>
        </div>
    );
};

export default PostModal;