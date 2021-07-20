import React from 'react';

const Header = () => {
   return (
      <header className="header">
         <div className="header__logo">
            <img src="#" alt="404" />
         </div>
         <div className="header__search search">
            <input type="text"></input>
         </div>
         <div className="header__nav">
            <div>home</div>
            <div>Companies</div>
            <div>Projects</div>
            <div>Profiles</div>
            <div>Jobs</div>
            <div>Messages</div>
            <div>Notification</div>
         </div>
         <div className="Header_logo-profile"></div>
      </header>
   )
};

export default Header;