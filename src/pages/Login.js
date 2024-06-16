import React, { useState, useContext } from 'react';

import { redirect, useNavigate  } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import authService from '../api/authService';
import log from '../api/authService';

import Cookies from 'js-cookie';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe,SetRemeberMe] = useState(false);
    
    const { login } = useContext(AuthContext);
    const history = useNavigate ();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
debugger
          // const t = await log();
           //console.log(t);
            const response = await authService.login(email, password,rememberMe);
            Cookies.set('auth', 'true', { expires: 10000 });
            login(response.data);

            console.log(response.data);
            redirect("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        
        <section className="  page-section bg-primary" style={{backgroundcolor:"#9A616D"}}>

        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius: "1rem"}}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                     alt="login form" className="img-fluid" style={{borderRadius:" 1rem 0 0 1rem"}} />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
    
                                    <form onSubmit={handleLogin}> 
    
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                                            <span className="h1 fw-bold mb-0">Logo</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"} }>Sign into your account</h5>
    
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control form-control-lg" />
                                            <label >Email address</label>
                                        </div>
    
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />
                                            <label className="form-label" >Password</label>
                                        </div>
    
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <div className="checkbox">
                                                <label >
                                                    <input type='checkBox' value={rememberMe} onChange={(e) => SetRemeberMe(e.target.value)} className="form-control form-control-lg" />
                                                </label>
                                            </div>
                                        </div>
    
                                        <div className="pt-1 mb-4">
                                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" role="submit">Login</button>
                                        </div>
    
                                        <a id="forgot-password" className="small text-muted">Forgot your password?</a>
                                        <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>
                                            Don't have an account? <a style={{color: "#393f81"}} >
                                                Register Here
                                            </a>
                                        </p>
                                        <a href="#!" className="small text-muted">Terms of use.</a>
                                        <a href="#!" className="small text-muted">Privacy policy</a>
                                    </form>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

