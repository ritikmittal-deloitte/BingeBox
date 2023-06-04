import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./components/Home/Home";
import WishList from "./components/WishList/WishList";
import { useState } from "react";
import Description from "./components/Description/Description";
import Signup from "./components/Signup/Signup";
import Subscriptionplans from "./components/Subscriptionplans/Subscriptionplans";
import PaymentSuccessful from "./components/PaymentSuccessful/PaymentSuccessful";
import SelectedPlan from "./components/SelectedPlan/SelectedPlan";
import Payment from "./components/Payment/Payment";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log("islogin", isLogin);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscription-plans" element={<Subscriptionplans />} />
        <Route path="/payment-successful" element={<PaymentSuccessful />} />
        <Route path="/selected-plan" element={<SelectedPlan />} />
        <Route path="/payment" element={<Payment />} />
        {
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/description/:movieId" element={<Description />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default App;
