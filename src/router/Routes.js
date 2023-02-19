import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"
import { About } from "../Pages/About/About"
import Error from "../Pages/Error/Error"
import { Home } from "../Pages/Home/Home"
import Media from "../Pages/Media/Media"
import Messages from "../Pages/Messages/Messages"
import SinglePost from "../Pages/SinglePost/SinglePost"
import ProtectedRoute from "./ProtectedRoute"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
           
            {
                path:'/messages',
                element:<Messages/>
            },
            {
                path:'/media',
                element:<Media/>
            },
            {
                path:'/media/:postId',
                element:<SinglePost/>
            },
        ]
    },
    {
        path:'/about',
        element:<ProtectedRoute><About/></ProtectedRoute>
    },
    {
        path:'/*',
        element:<Error/>
    },
])