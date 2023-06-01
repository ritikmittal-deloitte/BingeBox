import React from 'react';
import { useNavigate } from "react-router-dom";
import { UserContextProvider } from '../../context/Context/UserContext/UserState';
const Login = ({setIsLogin}) => {
    const navigate = useNavigate();

    const handleLogin=()=>{
        setIsLogin(true)
        navigate("/home")

    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;