import React from 'react';
import { BiComment, BiLike } from 'react-icons/bi';
import {Link} from 'react-router-dom'

const Media = () => {
    const posts=[
        {
            postId:'76676',
            postedBy:'Kaman Khan',
            postText:'Love is a force that has the power to move mountains, to make the impossible possible, and to bring two people together in a way that defies all logic and reason. It is a feeling that transcends time and space',
            postImage:'https://picsum.photos/200/300'
        }
    ]
    return (
        <div className=' py-3'>
            <h2 className='text-center text-2xl font-medium'>News Feed</h2>
            <div className='mt-10 px-10'>
                {
                    posts.map(post=>
                        <div className='shadow-sm '>
                            <div className='flex items-center gap-5 pb-3  border-b border-purple-500 border-opacity-25'>
                                <img src="https://picsum.photos/200/300" alt="" className='rounded-full w-10 h-10' />
                                <span className='font-semibold text-sm'>{post?.postedBy}</span>
                            </div>
                            <div className='py-3'>
                                {
                                    post.postText && <p>{post.postText.length>150 ? post.postText.slice(0,150)+' . . .':post.postText}</p>
                                }
                                {
                                    post.postImage &&
                                     <img src={post.postImage} alt="" className='w-full h-72 mt-5' />
                                }
                                <div className='flex justify-between py-3'>
                                    <Link to={`/media/${post.postId}`} className='flex gap-1 items-center bg-purple-500  bg-opacity-10  p-2 rounded-md text-sm font-medium cursor-pointer '>
                                        <BiLike/>7
                                    </Link>
                                    <Link to={`/media/${post.postId}`} className='flex gap-1 items-center bg-purple-500  bg-opacity-10  p-2 rounded-md text-sm font-medium cursor-pointer'>
                                        <BiComment/>6
                                    </Link>
                                    <Link to={`/media/${post.postId}`} className='bg-purple-500 bg-opacity-10 hover:bg-opacity-25 p-2 rounded-md text-sm font-medium cursor-pointer'>
                                        Details
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            
            
        </div>
    );
};

export default Media;