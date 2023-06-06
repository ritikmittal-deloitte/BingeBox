import React from 'react';
import "./accounts.scss"
import Logo from "../Logo/Logo"
import { dummyData } from '../../mockData/accountsMockData';
import { AccountAction } from '../../redux/AccountSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Accounts = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleSelectingAccount=(account)=>{
        console.log("aacount",account)
        dispatch(AccountAction.selectCurrentAccount(account))
        navigate("/home")
    }


    return (
        <div className='accounts-main-container'>
            <div className='inner-account-container'>
                <div className='logo-conatiner'>
                <Logo/>
                </div>
                
                <h3>Who is Watching?</h3>
                <div className='accounts-container'>
                    {
                        dummyData.accounts.map((account)=>(
                            <div className='account-style' >
                                <img src={account.img} onClick={()=>handleSelectingAccount(account)}/>
                                <div className='account-name-style'>{account.name}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Accounts;