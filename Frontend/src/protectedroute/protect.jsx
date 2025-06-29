import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UseAuth } from '../contest/AuthContest.jsx'
import { useEffect } from 'react';

function Protect({children}) {
    const { isLogin } = UseAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if (!isLogin){
            navigate('/login')
        }
    },[isLogin, navigate])
    if(!isLogin) return null; 
  return (
    <div>
        {children}
    </div>
  )
}

export default Protect
