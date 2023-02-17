import React from 'react';
import Nav from '../Pages/SharedComponents/Nav/Nav';
import {Outlet} from 'react-router-dom'
import Footer from '../Pages/SharedComponents/Footer/Footer';
import LeftSideBar from '../Pages/SharedComponents/LeftSideBar/LeftSideBar';
import { RightSideBar } from '../Pages/SharedComponents/RightSideBar/RightSideBar';

const Main = () => {
    return (
        <div>
            <Nav/>
            <div className='grid grid-cols-8 container mx-auto gap-5'>
                <div className="col-span-2">
                    <LeftSideBar/>
                </div>
                <div className="col-span-4">
                    <Outlet/>
                </div>
                <div className="col-span-2">
                    <RightSideBar/>
                </div>
            </div>
            <Footer/>
   
       
        
        </div>
    );
};

export default Main;