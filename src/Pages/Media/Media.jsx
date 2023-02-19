import React,{useContext, useEffect} from 'react';

import { DataContext } from '../../Contexts/CollectionProvider';
import Post from './Post';

const Media = () => {
    const {postCollection, getAllPost} = useContext(DataContext)
    useEffect(()=>{
        getAllPost()
    },[getAllPost])

    return (
        <div className=' py-3'>
            <h2 className='text-center text-2xl font-medium'>News Feed</h2>
            <div className='mt-10 px-10'>
                {
                    postCollection.map(post=><Post key={post._id} post={post}></Post> )
                }
            </div>
            
            
        </div>
    );
};

export default Media;