import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"
import { Home } from "../Pages/Home/Home"
import Messages from "../Pages/Messages/Messages"

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
        ]
    }
])