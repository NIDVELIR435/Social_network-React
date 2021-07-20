import React from 'react';

const LeftGridProfile = () => {
   return (
      <nav className="main__profile-left-nav">
         <div className="main__profile-left-nav__ava avatar">
            <p>Here is place for avatar</p>
         </div>
         <div className="main__profile-left-nav__contacts">
            <p>here place for contacts for profile</p>
         </div>
         <div className="main__profile-left-nav__following">
            <p>Here place for following stats
            </p>
         </div>
         <div className="main__profile-left-nav__followers">
            <p>Here place for followers stats
            </p>
         </div>
         <div className="main__profile-left-nav__link-profile">
            <a href="#">View Profile</a>
         </div>
      </nav>
   )
};

export default LeftGridProfile;