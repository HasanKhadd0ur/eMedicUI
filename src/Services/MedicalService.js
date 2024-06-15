import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'https://localhost:44390/api/medicalstateapi/';
debugger

const GetAll = () => {
    

    return  axios.get(
        API_URL,
        
        {
            
           withCredentials: true,
           
        },
    );
};

const log = () => {
     
 return fetch(API_URL + 'log',{method:"get"})
};

export default {
    GetAll,
    log
};
