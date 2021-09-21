import React from 'react';
import c from "./Header.module.css";
import logo from '../images/Header_logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header className={c.header}>
         <div className={c.LogoAndSearch}>
            <div className={c.logo}>
               <img src={logo} alt="logo" />
            </div>
            <div className={c.Search}>

            </div>   <input type="text"></input>
         </div>
         <div className={c.Nav}>
            <div><NavLink to="/Home" activeClassName={c.active}>Home</NavLink></div>
            <div><NavLink to="/Companies" activeClassName={c.active}>Companies</NavLink></div>
            <div><NavLink to="/Projects" activeClassName={c.active}>Projects</NavLink></div>
            <div><NavLink to="/Profile" activeClassName={c.active}>Profile</NavLink></div>
            <div><NavLink to="/findUsers" activeClassName={c.active}>FindUsers</NavLink></div>
            <div><NavLink to="/Jobs" activeClassName={c.active}>Jobs</NavLink></div>
            <div><NavLink to="/Messages" activeClassName={c.active}>Messages</NavLink></div>
            <div><NavLink to="/Notificatiom" activeClassName={c.active}>Notification</NavLink></div>
         </div>
      </header>
   )
};

export default Header;