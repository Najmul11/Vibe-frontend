import axios from 'axios';
import React,{useContext, useState} from 'react';
import { toast } from 'react-hot-toast';
import { BiImageAdd } from 'react-icons/bi';
import { imageUploadUrl } from '../../App';
import { AuthContext } from '../../Contexts/AuthProvider';
import { DataContext } from '../../Contexts/CollectionProvider';
import Loader from '../SharedComponents/Loader/Loader';


const PhotoChangeModalBody = ({setIsModalOpen, isLoading, setIsLoading}) => {
    const [imagePrev, setImagePrev]=useState('')
    const [image, setImage]=useState('')

    const {updateUserProfile, user} = useContext(AuthContext)
    const {getAllUsers} = useContext(DataContext)

    const handleSubmit = (e) =>{
        setIsLoading(true)
        e.preventDefault()

        const formData = new FormData()
        formData.append('image', image)

        axios.post(imageUploadUrl,formData)
        .then(res1=>{
            const profile ={ photoURL:res1.data.data.display_url}
            updateUserProfile(profile)
            .then(res=>{
                const changedData={uid:user.uid, photo:res1.data.data.display_url}
                axios.put('http://localhost:5000/updatephoto',changedData) 
                .then(res=>{
                    getAllUsers()
                    setIsModalOpen(false)
                    setIsLoading(false)
                })
            })
        })
        .catch(err=>{
            setIsLoading(false)
            toast.error('Something wrong happened')
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
        <div className="px-6 py-6 lg:px-8">

        <div className={imagePrev && 'py-5'}>
            {
                imagePrev && 
                <img src={imagePrev} className='h-32 rounded-full w-32 mx-auto' alt='' />
            }

        </div>  

        <form onSubmit={handleSubmit} className="space-y-6">
            <label className=" py-2 my-3 rounded file-selector-button font-medium text-sm  bg-purple-500 bg-opacity-10 hover:bg-opacity-25 w-full dark:text-white  ">
                <span className="flex items-center justify-center gap-2">
                <BiImageAdd className='text-xl'/>Choose Photo
                </span >
                <input onChange={addImageHandler} type="file" accept='image/*' name="file" id="file-input"/>
            </label>

            <button type="submit" className="w-full font-medium py-2 pl-3 pr-4 text-black rounded text-sm  bg-purple-500 items-center bg-opacity-50 hover:bg-opacity-75 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-white">
                {
                    isLoading ? <div className='flex justify-center'><Loader/></div>: 'Save'
                }
            </button>
        </form>
    </div>
    );
};

export default PhotoChangeModalBody;