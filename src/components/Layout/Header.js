import React,{ useState, useContext } from 'react';
import AuthContext from '../../contexts/Authentication Context/AuthContext';
import { Link} from "react-router-dom"


export const Header = () => {
	const {user} = useContext(AuthContext);

  return (
    
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
	    {user.user == undefined ? "": user.user.firstName} {user.user == undefined ? "": user.user.lastName}

            </a>
            <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"href="/MedicalState">Medicines</a>
                    </li>

                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"asp-action="Index" asp-controller="Home">Home</a>
                    </li>

                    <li className="nav-item mx-0 mx-lg-1">
            
				<Link path="/MedicalState" >sds</Link>
		        </li>
                </ul>

            </div>
        </div>
    </nav>

  )
 }

