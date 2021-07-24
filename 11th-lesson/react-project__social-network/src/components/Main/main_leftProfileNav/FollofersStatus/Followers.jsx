import React from 'react'
import c from './Followers.module.css'

const Followers = (props) => {
   return (
      <div className={c.Followers}>
         <div className={c.FollowersName}>
            <h1>Followers</h1>
         </div>
         <div className={c.FollowersCanc}>
            {props.canc}
         </div>
      </div >
   )
};

export default Followers;