import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Loader from '../Pages/SharedComponents/Loader/Loader';


const ProtectedRoute = ({children}) => {
   const {user , loading} = useContext(AuthContext)

   const location = useLocation();


   if (loading) {
      return <Loader/>
   }

   if (user) return children
   
   
    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default ProtectedRoute;   
