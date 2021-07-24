import React from 'react';
import c from "./Main_leftProfileNav.module.css";
import avatar from '../../images/avatar.jpeg';
import Following from './FollowingStatus/Following';
import Followers from './FollofersStatus/Followers';
import Link from './Link/Link';
import Suggestions from './Suggestions/Suggestions';

const LeftGridProfile = () => {
   return (
      <div className={c.profileLeftNav}>
         <div className={c.Background__forAvatar}>
            <div className={c.profileLeftNav__AvaAndName}>
               <img src={avatar} alt="avatar" />
               <div className={c.Name}>
                  <h1 class="NameAndSurname"> Diana Smith</h1>
                  <h3 class="wayDirectionValue">Designer</h3>
               </div>
            </div>
         </div>
         <Following canc="130" />
         <Followers canc="23" />
         <Link />
         <Suggestions />
      </div>
   )
};

export default LeftGridProfile;