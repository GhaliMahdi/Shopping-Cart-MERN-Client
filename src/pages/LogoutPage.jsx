import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { useNavigate } from 'react-router-dom';

export const LogoutPage = () => {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate()
    
    useEffect(() => {
        setUser({});
        navigate('/');
    }, [])
    return (
        <div>

        </div>
    )
}