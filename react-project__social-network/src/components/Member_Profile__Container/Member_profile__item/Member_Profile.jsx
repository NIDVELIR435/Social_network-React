import React from 'react';
import c from './Member_profile.module.css';
import UserPhoto from '../../images/user.png'
const Member_Profile = (props) => {

   return (
      <div className={c.gridArea}>
         <div className={c.left_area}>
            <div className={c.avatar}>
               <img src={props.avatar != null ? props.avatar : UserPhoto}/>
            </div>
            <div className={c.fullName}>
               <span className={c.firstName}>{props.firstName}</span>
               <span className={c.lastName}>{props.lastName}</span>
            </div>
            <div className={c.aboutMember}>{props.aboutMember}</div>
         </div >
         <div className={c.right_area}>
            right grid area
         </div>
      </div >
   )

}
export default Member_Profile;