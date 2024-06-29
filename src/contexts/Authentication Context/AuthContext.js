// /contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    

    useEffect(() => {
        // Check if the authentication cookie is present
        const authCookie = Cookies.get('auth');

	console.log(authCookie);

        setIsAuthenticated(!!authCookie);

    }, []);

    const login = (user) => {
        setIsAuthenticated(true);
        console.log(isAuthenticated,"login");
Cookies.set('auth', 'true', { expires: 1000 });
                
        setUser(user);
    };

    const logout = () => {
        Cookies.remove('auth');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user,login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
