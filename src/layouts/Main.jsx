import React from 'react';
import Nav from '../Pages/SharedComponents/Nav/Nav';
import {Outlet} from 'react-router-dom'
import Footer from '../Pages/SharedComponents/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;