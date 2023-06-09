import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Navigate, NavLink, useNavigate, useLocation } from "react-router-dom";
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
import { UserContextProvider } from "./context/Context/UserContext/UserState";
import UserPreferences from "./components/UserPreferences/UserPreferences";
import Profile from "./components/Profile/Profile";
import SearchPage from "./components/Searchpage/SearchPage";
import Accounts from "./components/accounts/Accounts";
import ForgotPassword from "./components/ForgotPassowrd/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log("islogin", isLogin);
  const navigate=useNavigate();
  const location=useLocation();
  let url=location.pathname;

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

        {
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/description/:movieId" element={<Description />} />
          </Route>
        }
      </Routes> */}
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

          <Route path="/signup" element={<Signup setIsLogin={setIsLogin}    />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/userpreferences" element={<UserPreferences />} />
          <Route path="/subscription-plans" element={<Subscriptionplans />} />
          <Route path="/payment-successful" element={<PaymentSuccessful />} />
          <Route path="/selected-plan" element={<SelectedPlan />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/payment" element={<Payment />} /> */}
          {
            isLogin ? ( 
            <> <Route path="/accounts" element={<Accounts />} />
            <Route path="/userpreferences" element={<UserPreferences  setIsLogin={setIsLogin}  />} />
              <Route element={<AppLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/movies" element={<Home />} />
              <Route path="/series" element={<Home />} />
              
              <Route path="/anime" element={<Home />} />
              <Route path="/tv-shows" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/searchresults/:text" element={<SearchPage />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/description/:movieId" element={<Description />} />
            </Route>
            </>
            ) : (
          <Route
            path="*"
            element={<Navigate to={"/login"} replace />}/>
            ) }

        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
