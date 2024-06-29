import React, { useState, useContext } from 'react';

import MedicalService  from '../../api/Services/MedicalService'
import MedicalCard from '../../components/Medical Cases/MedicalCard';
import { useEffect } from 'react';
export const MedicalState= () => {
  const [r,setR]= useState([]);
	//debugger
  let t =[]
const h = ()=>{
debugger
      MedicalService
        .GetAll()
        .then(
          (response)=>{
            //setR(response.data);
           // console.log(response.data);
            t=response.data
            
      	     t=t.map(e=>{return <MedicalCard medicalState={e} />})
            setR(t);
            
	//console.log(t)
    }

    );
     
	};
  
  return (
    <section className='page-section'>
<button onClick={h}>get</button>

  <div>      
    { 
    r
    }
  </div>

</section>
  );
}
