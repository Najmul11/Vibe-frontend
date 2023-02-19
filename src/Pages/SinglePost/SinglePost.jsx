import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiLike } from 'react-icons/bi';
import {useParams} from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider';

const SinglePost = () => {
    const {user} = useContext(AuthContext)
    const [post, setPost]= useState({})
    const [text, setText]= useState('')
    const [isLoading , setIsLoading]= useState(false)
    const [hasLiked, setHasLiked]= useState(false)




    const {postId}= useParams()
    
    const {data:comments=[], refetch}=useQuery({
        queryKey:['comments'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/comments/${postId}`)
            const data= await res.json()
            return data
        }
    })

    
    useEffect(()=>{
        const getSinglePost = ()=>{
            axios.get(`http://localhost:5000/posts/${postId}`)
            .then(res=>{
                setPost(res.data);
                setHasLiked(res.data.likes.includes(user?.uid))
            })
        }
        getSinglePost()
    },[ postId, user?.uid])

    const handleComment =async () =>{
        if(!user) return toast.error('you must be logged in')
        
        setIsLoading(true)
        if (!text) {
            toast.error('write  something')
            setIsLoading(false)
            return
        }
        const comment ={
            comment:text,
            postId:postId,
            commentedBy:user.displayName,
            commenterAvatr:user.photoURL
        }
       await axios.post(`http://localhost:5000/createcomment`,comment)
        .then(res=>{
            setIsLoading(false)           
            refetch()
        })
        .catch(err=>{
            setIsLoading(false)
            toast.error('Something wrong happend')
        })
        
    }

    const handleLike = () =>{
        if(!user) return toast.error('you must be logged in')
        if (hasLiked) return toast.error('already liked')
        const data={uid:user?.uid , postId:postId}
        axios.put(`http://localhost:5000/likepost`,data)
        .then(res=>{
            setHasLiked(true)
        })
    }
    
    return (
        <div className=' py-3'>
            <div className='mt-10 px-10'>
                <div className='shadow-sm '>
                    <div className='flex items-center gap-5 pb-3  border-b border-purple-500 border-opacity-25'>
                        <img src={post?.postedByImage} alt="" className='rounded-full w-10 h-10' />
                        <span className='font-semibold text-sm'>{post?.postedBy}</span>
                    </div>
                    <div className='py-3'>
                        {
                            post.postText && <p>{post.postText}</p>
                        }
                        {
                            post.media &&
                                <img src={post.media} alt="" className='w-full h-72 mt-5' />
                        }
                        
                            
                        <div className='flex justify-between py-3'>
                            <div className='w-2/5'>
                                <button onClick={handleLike}
                                    className={`${hasLiked && 'text-purple-500'} flex gap-1 items-center bg-purple-500  bg-opacity-10 px-5 py-2 rounded-full text-2xl font-medium cursor-pointer`}>
                                    <BiLike/>
                                </button>
                            </div>
                            <div className='w-3/5 relative'>
                                <input onChange={(e)=>setText(e.target.value)}
                                    type="text" className='w-full bg-gray-200  border-0 focus:border-0 focus:ring-gray-50 rounded-full'
                                placeholder='Write a comment...'
                                />
                                <button  onClick={handleComment} disabled={isLoading}
                                className='absolute lg:right-0  bg-purple-500 rounded-r-full px-5 py-2 font-medium hover:text-white'>Drop</button>
                            </div>
                        
                        </div>
                        
                        <div className='flex flex-col gap-3 mt-5'>
                            {
                                comments.length>0 &&
                                comments.map(comment=> 
                                    <div key={comment._id} className='flex bg-gray-200 items-center gap-5 border-b border-purple-600 border-opacity-10 px-5 py-3 rounded-lg'>
                                        <img src={comment.commenterAvatr} alt="" className='rounded-full w-10 h-10' />
                                        <div>
                                            <span className='font-semibold'>{comment.commentedBy}</span>
                                            <p className='text-gray-800'>{comment.comment}</p>
                                        </div>
                                    </div>
                                    )
                            }
                        </div>
                    </div>

                </div>
            </div>
            
            
        </div>
    );
};

export default SinglePost;