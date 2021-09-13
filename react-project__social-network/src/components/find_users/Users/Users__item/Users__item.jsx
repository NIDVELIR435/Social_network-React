import React from 'react';
import c from './Users__item.module.css'
import UserPhoto from '../../../images/user.png';
import { NavLink } from 'react-router-dom';

const UsersItem = (props) => {
   return (
      < div>
         <div className={c.cardItem}>
            <div className={c.left_column}>
               <div className={c.avatar}>
                  <NavLink to={`memberProfile/${props.id}`}>
                     <img src={props.avatar != null ? props.avatar : UserPhoto} />
                  </NavLink>
               </div>
               <div className={c.button}>
                  {props.followed
                     ? <button disabled={props.VievCurrentUser.some(id => id === props.id)}
                        className={c.Follow} onClick={() => { props.unfollowTC(props.id) }}> You follow</button>
                     : <button disabled={props.VievCurrentUser.some(id => id === props.id)}
                        className={c.Unfollow} onClick={() => { props.followTC(props.id) }}>Follow</button>
                  }
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