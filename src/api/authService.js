// /api/authService.js
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'https://localhost:44390/api/accessapi/';
debugger
const register = (username, email, password) => {
    return axios.post(API_URL + 'register', {
        username,
        email,
        password
    });
};

const login = (username, password,rememberMe) => {
    const loginData = {
      Email: username, // Note the property name matches the backend model
        Password: password,            // Note the property name matches the backend model
        RememberMe: true,             // Note the property name matches the backend model
        ReturnUrl: ''  
    };


 return  axios.post(API_URL+'login', 
       loginData
        , {
           withCredentials: true,
            headers: {
               'Content-Type': 'application/json'
            }
        });
};

const log = () => {
     
 return fetch(API_URL + 'log',{method:"get"})
};

const logout = () => {
    Cookies.remove('auth');
};

export default {
    register,
    login,
    log,
    logout
};
