import { router } from "./router/Routes";
import { RouterProvider } from "react-router-dom"
import {createContext, useState} from 'react'

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
    </div>
  );
}

export default App;
