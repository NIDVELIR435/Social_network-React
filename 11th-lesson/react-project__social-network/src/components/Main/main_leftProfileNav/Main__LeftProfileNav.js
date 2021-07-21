import React from 'react';
import c from "./Main_leftProfileNav.module.css";

const LeftGridProfile = () => {
   return (
      <div className={c.main__profileLeftNav}>
         <div className={c.main__profileLeftNav__ava}>
            <img src="#" alt="avatar" class="" />
         </div>
         <div className={c.main__profileLeftNav__contacts}>
            <p>here place for contacts for profile</p>
         </div>
         <div className={c.main__profileLeftNav__following}>
            <p>Here place for following stats
            </p>
         </div>
         <div className={c.main__profileLeftNav__followers}>
            <p>Here place for followers stats</p>
         </div>
         <div className={c.main__profileLeftNav__linkProfile}>
            <a href="/Profile">View Profile</a>
         </div >
      </div>
   )
};

export default LeftGridProfile;