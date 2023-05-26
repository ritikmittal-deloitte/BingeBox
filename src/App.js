import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import { useState } from "react";

function App() {
  const [isLogin,setIsLogin]=useState(false)
  console.log("islogin",isLogin)
  
  return (
    <div className="App">
      <Routes>
        
        
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin}/>} />
        <Route element={<AppLayout/>}>
          <Route path="/home" element={<Home/>} />      
          <Route path="/watchlist" element={<WatchList/>} />                                                                                                                                                                                
          </Route>
      </Routes>
    </div>
  );
}

export default App;
