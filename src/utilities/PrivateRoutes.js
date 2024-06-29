import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import Cookies from 'js-cookie';

import { redirect, useNavigate  } from 'react-router-dom';
import AuthContext from '../contexts/Authentication Context/AuthContext';
const PrivateRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated);
   
    const authCookie = Cookies.get('auth');

    if(!!authCookie ){ return (<Outlet/> );}

	return (<Navigate to="/login"/>)
    
}

export default PrivateRoutes