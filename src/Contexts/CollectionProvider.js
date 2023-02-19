import axios from 'axios';
import React,{createContext,useEffect, useState} from 'react';

export const DataContext = createContext()

const CollectionProvider = (props) => {
    const[postCollection, setPostCollection] = useState([])
    const[userCollection, setUserCollection] = useState([])
    const[limitPosts, setLimitPosts] = useState([])


    const getAllUsers = ()=>{
        axios.get('http://localhost:5000/users')
        .then(res=>{
            setUserCollection(res.data);
            console.log(res.data);
        })
    }

    const getAllPost = ()=>{
        axios.get('http://localhost:5000/posts')
        .then(res=>{
            setPostCollection(res.data);
        })
    }
    const getLimitedPost = ()=>{
        axios.get('http://localhost:5000/limitposts')
        .then(res=>{
            setLimitPosts(res.data);
        })
    }
    
    useEffect(()=>{
        getLimitedPost()
        getAllUsers()
        getAllPost()
    },[])

    const dataInfo ={postCollection, userCollection, getAllPost, getAllUsers, limitPosts}
    return (
        <DataContext.Provider value={dataInfo}>
            {props.children}
        </DataContext.Provider>
    );
};

export default CollectionProvider;