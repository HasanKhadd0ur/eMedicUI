import React from 'react'
import MedicalService  from '../Services/MedicalService'
export const MedicalState= () => {
  const handleClick = async ()=>{
    const response = await MedicalService.GetAll();
    
    console.log(response.data);
  
  }
  return (
<section>
hkkhkhj
<button onClick={handleClick}>get med</button>
    </section>
  )
}
