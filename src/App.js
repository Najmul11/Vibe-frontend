import { router } from "./router/Routes";
import { RouterProvider } from "react-router-dom"
import {createContext, useState} from 'react'
import './App.css'
import { Toaster } from "react-hot-toast";


export const imageUploadUrl =`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb_api}`
export const DarkContext=createContext() 

function App() {
  const [darkMode, setDarkMode]= useState(false)


  const handleDarkMode= ()=>{
     setDarkMode(!darkMode)
  }

  const darkInfo ={darkMode, handleDarkMode}


  return (
    <div className={darkMode ? 'dark' :''}>
      <DarkContext.Provider value={darkInfo}>
          <RouterProvider router={router}></RouterProvider>
      </DarkContext.Provider>
      <Toaster/>
    </div>
  );
}

export default App;
