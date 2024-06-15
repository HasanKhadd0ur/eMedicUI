import React, { useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import authService from '../api/authService';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate ();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await authService.register(username, email, password);
            history.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        
        <div className='page-section'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

