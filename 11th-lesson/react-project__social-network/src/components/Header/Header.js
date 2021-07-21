import React from 'react';
import c from "./Header.module.css";


const Header = () => {
   return (
      <header className={c.header}>
         <div className={c.header__logo}>
            <img title="my-img" src='./Header-logo.png' alt="my-image" />
         </div>
         <div className={c.header__search}>
            <input type="text"></input>
         </div>
         <div className={c.header__nav}>
            <div><a href="/Home" class="">Home</a></div>
            <div><a href="/Companies" class="">Companies</a></div>
            <div><a href="/Projects" class="">Projects</a></div>
            <div><a href="/Profile" class="">Profile</a></div>
            <div><a href="/Jobs" class="">Jobs</a></div>
            <div><a href="/Messages" class="">Messages</a></div>
            <div><a href="/Notificatiom" class="">Notification</a></div>
         </div>
         <div className={c.Header_logoProfile}></div>
      </header >
   )
};

export default Header;