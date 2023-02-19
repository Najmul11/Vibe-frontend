import axios from 'axios';
import React,{useState, useContext} from 'react'
import { BiImageAdd } from 'react-icons/bi';
import { imageUploadUrl } from '../../App';
import { AuthContext } from '../../Contexts/AuthProvider';
import PostModal from './PostModal';
import toast from 'react-hot-toast'
import { DataContext } from '../../Contexts/CollectionProvider';
import SoloPost from './SoloPost';

export const Home = () => {
  const [postText, setPostText]=useState('')
  const [image, setImage]=useState('')
  const [imagePrev, setImagePrev]=useState('')
  const [isModalOpen, setIsModalOpen]=useState('')
  const [isLoading, setIsLoading]=useState(false)

  const {limitPosts} = useContext(DataContext)






  const {user}= useContext(AuthContext)

  const handlePost=async()=>{
      setIsLoading(true)
      const formData = new FormData()
      formData.append('image', image)

      await  axios.post(imageUploadUrl,formData)
      .then(res=>{
        
        const post={postText, media:res.data.data.display_url, postedBy:user.displayName, postedByUid:user.uid, postedByImage:user.photoURL, likes:[],totalLikes:0}
         axios.post('http://localhost:5000/createpost',post)
         .then(res=>{
          toast.success('Post successfull')
          setPostText('')
          setImagePrev('')
          setIsModalOpen(false)
          setIsLoading(false)
         }).catch(err=>{
          setIsLoading(false)
          toast.error('Server is on maintainence')
         })
              
      })
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
    
    <>
      {
        user ?
        <>
        <div className='p-5 rounded-md border border-gray-200'>
          <div className='flex items-center gap-5 border-b pb-5'>
              <img src={user?.photoURL} alt="" className='rounded-full w-10 h-10' />
              <label onClick={()=>setIsModalOpen(true)} htmlFor='post-modal' className='cursor-pointer flex items-center text-start w-full text-gray-600 h-10 bg-gray-200 hover:bg-gray-300 rounded-full px-5'>
                {
                    postText ? <>{postText}</> :<>
                      Whats's on your mind, {user?.displayName}?
                    </>
                }
              </label>
          </div>
          <div className='py-5 flex justify-center'>
            <label onClick={()=>setIsModalOpen(true)} htmlFor='post-modal' className='cursor-pointer flex py-2 px-3 rounded gap-3 bg-purple-500 items-center bg-opacity-10 hover:bg-gray-200'>
              <BiImageAdd className='text-2xl'/><span className='font-medium'>Image</span>
            </label>
          </div>
          
          {
              isModalOpen && 
              <PostModal setPostText={setPostText} postText={postText} image={image}
              addImageHandler={addImageHandler} setIsModalOpen={setIsModalOpen}
              imagePrev={imagePrev} handlePost={handlePost} isLoading={isLoading}
              />
          }
        </div>
        <div className='mt-10'>
            <h2 className='text-2xl font-medium text-center'>Most popular Posts</h2>
              {
                  limitPosts?.length>0 && 
                  limitPosts.map(post=><SoloPost key={post._id} post={post}></SoloPost>)
              }
        </div>
        </>
        :
        <div className='text-center py-20 font-medium text-3xl'>
          <h3 >Login to explore</h3>
        </div>
      }
    </>
 
  )
}
