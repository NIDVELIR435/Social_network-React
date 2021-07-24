import React from 'react'
import c from './Following.module.css'

const Following = (props) => {
   return (
      <div className={c.Following}>
         <div className={c.FollowingName}>
            <h1> Following</h1>
         </div>
         <div className={c.FollowingCanc}>
            {props.canc}
         </div>
      </div >
   )
};

export default Following;