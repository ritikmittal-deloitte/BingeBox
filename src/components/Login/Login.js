import React from 'react';
import { useNavigate } from "react-router-dom";
import { UserContextProvider } from '../../context/Context/UserContext/UserState';
import { dummyData} from '../../mockData/accountsMockData';
import { useDispatch } from "react-redux";
import { AccountAction } from '../../redux/AccountSlice';
import Background from '../background/Background';
const Login = ({setIsLogin}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin=()=>{
        setIsLogin(true)
        if(dummyData.accounts.length===1){
            dispatch(AccountAction.selectCurrentAccount(dummyData.accounts[0]))
            navigate("/home")
        }
        else navigate("/accounts")

    }
    return (
       
        <>

        
            {/* <Background/> */}
             <button onClick={handleLogin}>Login</button> 
            </>

                )}            
export default Login;