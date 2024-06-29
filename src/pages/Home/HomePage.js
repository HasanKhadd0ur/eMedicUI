import React, { useState, useContext } from 'react';

import { Profile } from '../../components/User/Profile'
import  MedicalCardList  from '../../components/Medical Cases/MedicalCardList'

import AuthContext from '../../contexts/Authentication Context/AuthContext';

export const HomePage = () => {
	const {user} = useContext(AuthContext);
    const userr = {
        firstName:"hasan",
        lastName:"khaddour",
        bio:"patient",
        avatar:"avatar1.jpg"
    }
console.log(user)
  return (
    <>
    <Profile user={user}></Profile>
<MedicalCardList states={user.medicalStates}/>    
</>
  )
}
