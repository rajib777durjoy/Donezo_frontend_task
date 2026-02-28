import React from 'react';
import { useNavigate } from "react-router";

const ProtectRoute = ({children}) => {
    let navigate = useNavigate();
    const userData= localStorage.getItem('userData');
    console.log('userData::',userData)
    if(!userData){
        return navigate('/login')
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectRoute;