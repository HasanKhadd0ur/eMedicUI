import React, { useState, useContext } from 'react';

import useAuth from '../../hooks/useAuth'
export const NavMenu = () => {
	
    const {isAuthenticated} = useAuth();
  return (
   isAuthenticated ? 
    <>
    
    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/Login">Login</a>
                    </li>

                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/Register">Register</a>
                    </li>

                </ul>

            </div>
      
    </>
    :
    <>
    
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

                </ul>

            </div>
            </>
  
  )
 }

