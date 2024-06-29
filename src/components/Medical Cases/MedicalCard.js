import MedicalService  from "../../api/Services/MedicalService";

import { redirect, useNavigate  } from 'react-router-dom';
const MedicalCard=({medicalState})=>{
	console.log(medicalState)

	console.log(medicalState.prescriptionTime)
    const Navigate = useNavigate ();

    return (

        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-8 mb-4 mb-lg-0">
                <div className="card mb-3" style={{borderRadius: ".5rem"}}>
                    <div className="row g-0">
                        <div className="col-md-4 gradient-custom text-center text-black"
                             style={{borderTopLeftRadius: ".5rem", borderBottomRightRadius: ".5rem"}}>


                            <div className="icon-box">
                                <div className="icon " style={{color: "#5e54b3"}}><i className="fas fa-heartbeat  fa-8x "></i></div>
                            </div>         
                            <h5>{medicalState.stateName}</h5>
                            <p>Prescriped At  : {medicalState.prescriptionTime}</p>
                            <a >
                                <i className="far fa-edit mb-5"></i>
                            </a>

                            <a >

                                <i className="far fa-backward">

                                </i>
                                Go Back
                            </a>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-4">
                                <h6>Information</h6>
                                <hr className="mt-0 mb-4"/>
                                <div className="row pt-1">
                                    <div className="col-6 mb-3">
                                        <h6>Description</h6>
                                        <p className="text-muted">{medicalState.stateDescription}</p>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <h6>Medicine count :{medicalState.medicines.length}</h6>
                                    </div>
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6 mb-3">
                                        <a asp-action="Index">Back to Home</a>

                                    </div>
                                    <div className="col-6 mb-3">
 				<Navigate to="/MedicalState"/>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );

    
}


export default   MedicalCard
