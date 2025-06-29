import React from 'react'
import { createContext, useState, useContext } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setisLogin] = useState(localStorage.getItem('isAuthenticated') === 'true');
    let saveduser=null;
    try{
        const data=localStorage.getItem('username');
        saveduser=data?JSON.parse(data):null;
    }catch(err){
        console.error("Error parsing user data from localStorage:", err);
    }
    const [user, setUser] = useState(saveduser)
    const login = (userdata) => {
        setisLogin(true);
        setUser(userdata);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', JSON.stringify(userdata));
    }
    const logout = () => {
        setisLogin(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        localStorage.removeItem('name');
    }
    return (
        <AuthContext.Provider value={{ isLogin, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth=()=>{
    return useContext(AuthContext);
}
