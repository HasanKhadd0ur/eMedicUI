import axios from 'axios';

const API_URL = 'https://localhost:44390/api/medicalstate/';

axios.defaults.withCredential=true;
debugger

const GetAll = () => {
    

    return axios.get(
        API_URL,
        
        {
            
           withCredentials: true,
           
        },
    );
};

const GetById = (id) => {
    

    return  axios.get(
        API_URL+`/${id}`,
        
        {
            
           withCredentials: true,
           
        },
    );
};
const createMedicalCase= async (medicalCaseData) => {
    try {
        const response = await axios.post(`${API_URL}/medicalcases`, medicalCaseData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error creating medical case', error);
        throw error;
    }
};

const updateMedicalCase= async (id, medicalCaseData) => {
    try {
        const response = await axios.put(`${API_URL}/medicalcases/${id}`, medicalCaseData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error updating medical case', error);
        throw error;
    }
};


const deleteMedicalCase= async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/medicalcases/${id}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error deleting medical case', error);
        throw error;
    }
}
const log = () => {
     
 return fetch(API_URL + 'log',{method:"get"})
};

export default {
    GetAll,
    GetById,
    createMedicalCase,
    deleteMedicalCase,
    updateMedicalCase,
    log
};
