import React from 'react';
import { BiLike } from 'react-icons/bi';
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    return (
        <div className='shadow-sm lg:mt-10'>
            <div className='flex items-center gap-5 pb-3  border-b border-purple-500 border-opacity-25'>
                <img src={post?.postedByImage} alt="" className='rounded-full w-10 h-10' />
                <span className='font-semibold text-sm'>{post?.postedBy}</span>
            </div>
            <div className='py-3'>
                {
                    post.postText && <p>{post.postText.length>150 ? post.postText.slice(0,150)+' . . .':post.postText}</p>
                }
                {
                    post?.media &&
                        <img src={post?.media} alt="" className='w-full h-72 mt-5' />
                }
                <div className='flex justify-between py-3'>
                    <Link to={`/media/${post._id}`} className='flex gap-1 items-center bg-purple-500  bg-opacity-10  p-2 rounded-md text-sm font-medium cursor-pointer '>
                        <BiLike/>{post.totalLikes}
                    </Link>
                    
                    <Link to={`/media/${post._id}`} className='bg-purple-500 bg-opacity-10 hover:bg-opacity-25 p-2 rounded-md text-sm font-medium cursor-pointer'>
                        Details
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Post;