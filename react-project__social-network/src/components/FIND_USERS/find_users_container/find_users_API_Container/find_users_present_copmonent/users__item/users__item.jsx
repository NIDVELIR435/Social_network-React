import React from 'react';
import c from './users__item.module.css'
import UserPhoto from '../../../../../images/user.png';

const UsersItem = (props) => {
   return (
      < div>
         <div className={c.cardItem}>
            <div className={c.left_column}>
               <div className={c.avatar}>
                  <img src={props.avatar != null ? props.avatar : UserPhoto} />
               </div>
               <div className={c.button}>
                  {props.followed
                     ? <button className={c.Follow} onClick={() => { props.unFollow(props.id) }}> You follow</button>
                     : <button className={c.Unfollow} onClick={() => { props.follow(props.id) }}>Follow</button>}
               </div>
            </div>
            <div className={c.text}>
               <div className={c.name}>
                  <div className={c.firstName}>{props.firstName}</div>
                  <div className={c.lastName}>{props.lastName}</div>
               </div>
               <div className={c.status}>
                  {props.previewtext}
               </div>
               <div className={c.location}>
                  <div className={c.country}>
                     {props.country},
                  </div>
                  <div className={c.town}>
                     {props.town}
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
};

export default UsersItem;