import React, { useState, useContext } from 'react';
import MedicalService  from '../../api/Services/MedicalService'
import MedicalCard from '../../components/Medical Cases/MedicalCard';
import { useEffect } from 'react';

const MedicalCardList= ({states}) => {
 

     
//  console.log(states)
  return (
    <section className='page-section'>

  <div>      
    { 
    states.map(e=>{return <MedicalCard key={e.id} medicalState={e}/>})
    }
  </div>

</section>
  );
}
export default MedicalCardList 