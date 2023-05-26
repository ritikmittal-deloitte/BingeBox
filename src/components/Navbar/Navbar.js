import React, { useState } from "react";
import { ReactComponent as HomeLogo } from "../../assets/icons/home.svg";
import { ReactComponent as WishlistLogo } from "../../assets/icons/wishlist.svg";
import { ReactComponent as FilterLogo } from "../../assets/icons/filters.svg";
import { ReactComponent as SettingsLogo } from "../../assets/icons/settings.svg";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [onHovering, setOnHovering] = useState(false);
  const handleMouseOver = () => {setOnHovering(true)};
  const handleMouseOut = () => { setOnHovering(false)};
  return (
    <div
      className="d-flex flex-column justify-content-center navbar-container align-items-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className=" d-flex flex-column justify-content-between navbar-item-container">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "navlink-active-style" : "")}
        >
          <span className="d-flex">
            <HomeLogo />
            {
                onHovering&&<p> Home</p>
            }
            
          </span>
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) => (isActive ? "navlink-active-style" : "")}
        >
            <span className="d-flex">
            <WishlistLogo />
            {onHovering&&
            <p> Wishlist</p>}
          </span>
          
        </NavLink>
        <NavLink
          to="/filter"
          className={({ isActive }) => (isActive ? "navlink-active-style" : "")}
        >
             <span className="d-flex">
             <FilterLogo />
             {
                onHovering&&<p> Filters</p>
             }
            
          </span>
          
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "navlink-active-style" : "")}
        >
             <span className="d-flex">
             <SettingsLogo />
             {
                onHovering&&<p> Settings</p>
             }
            
          </span>
          
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
