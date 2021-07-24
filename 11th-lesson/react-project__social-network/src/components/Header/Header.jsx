import React from 'react';
import c from "./Header.module.css";
import logo from '../images/Header_logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header className={c.header}>
         <div className={c.header__logo}>
            <img src={logo} alt="logo" />
         </div>
         <div className={c.header__search}>
            <input type="text"></input>
         </div>
         <div className={c.header__nav}>
            <div><NavLink to="/Home" ActiveClassName={c.active}>Home</NavLink></div>
            <div><NavLink to="/Companies" ActiveClassName={c.active}>Companies</NavLink></div>
            <div><NavLink to="/Projects" ActiveClassName={c.active}>Projects</NavLink></div>
            <div><NavLink to="/Profile" ActiveClassName={c.active}>Profile</NavLink></div>
            <div><NavLink to="/Jobs" ActiveClassName={c.active}>Jobs</NavLink></div>
            <div><NavLink to="/Messages" ActiveClassName={c.active}>Messages</NavLink></div>
            <div><NavLink to="/Notificatiom" ActiveClassName={c.active}>Notification</NavLink></div>
         </div>
         <div className={c.Header_logoProfile}></div>
      </header >
   )
};

export default Header;