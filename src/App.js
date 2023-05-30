import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./components/Home/Home";
import WishList from "./components/WishList/WishList";
import { useState } from "react";
import Description from "./components/Description/Description";
import UserPreferences from "./components/UserPreferences/UserPreferences";

function App() {
  const [isLogin,setIsLogin]=useState(false)
  console.log("islogin",isLogin)
  
  return (
    <div className="App">
      <Routes>
        
        
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin}/>} />
        <Route path="/userpreferences" element={<UserPreferences/>}/>                                                                                                                                                                        
        {
          (<Route element={<AppLayout/>}>
          <Route path="/home" element={<Home/>} />      
          <Route path="/wishlist" element={<WishList/>} />   
          <Route path="/description/:movieId" element={<Description/>}/>      
          </Route>)
        }
        
      </Routes>
    </div>
  );
}

export default App;
