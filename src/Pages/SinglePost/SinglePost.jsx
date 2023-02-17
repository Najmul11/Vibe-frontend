import React from 'react';
import { BiLike } from 'react-icons/bi';

const SinglePost = () => {
    const post={
        postId:'76676',
        postedBy:'Kaman Khan',
        postText:'Love is a force that has the power to move mountains, to make the impossible possible, and to bring two people together in a way that defies all logic and reason. It is a feeling that transcends time and space together in a way that defies all logic and reason. It is a feeling that transcends time and space',
        postImage:'https://picsum.photos/200/300'
    }

    const comment=
        {
            userId:6786,
            name:'Naz',
            comment:'Hahahahahh'
        }
    
    return (
        <div className=' py-3'>
            <div className='mt-10 px-10'>
                <div className='shadow-sm '>
                    <div className='flex items-center gap-5 pb-3  border-b border-purple-500 border-opacity-25'>
                        <img src="https://picsum.photos/200/300" alt="" className='rounded-full w-10 h-10' />
                        <span className='font-semibold text-sm'>{post?.postedBy}</span>
                    </div>
                    <div className='py-3'>
                        {
                            post.postText && <p>{post.postText}</p>
                        }
                        {
                            post.postImage &&
                                <img src={post.postImage} alt="" className='w-full h-72 mt-5' />
                        }
                        <div className='flex justify-between py-3'>
                            <div className='w-2/5'>
                                <button className='flex gap-1 items-center bg-purple-500  bg-opacity-10 px-5 py-2 rounded-full text-2xl font-medium cursor-pointer '>
                                    <BiLike/>
                                </button>
                            </div>
                            <div className='w-3/5 relative'>
                                <input type="text" className='w-full bg-gray-200  border-0 focus:border-0 focus:ring-gray-50 rounded-full'
                                placeholder='Write a comment...'
                                />
                                <button className='absolute lg:right-0  bg-purple-500 rounded-r-full px-5 py-2 font-medium hover:text-white'>Drop</button>
                            </div>
                           
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex bg-gray-200 items-center gap-5 border-b border-purple-600 border-opacity-10 px-5 py-3 rounded-full'>
                                <img src="https://picsum.photos/200/300" alt="" className='rounded-full w-12 h-12' />
                                <div>
                                    <span className='font-semibold'>{comment.name}</span>
                                    <p className='text-gray-800'>{comment.comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            
        </div>
    );
};

export default SinglePost;