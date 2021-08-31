import React from 'react';
import c from './users__item.module.css'
import UserPhoto from '../../../../../images/user.png';
import { NavLink } from 'react-router-dom';
import { UserAPI } from '../../../../../../API/axios_get_api';

const UsersItem = (props) => {
   let follow = () => {
      return (
         props.isRequestSubsButtonAC(true, props.id),
         UserAPI.followStatus(props.id)
            .then(data => {
               props.FollowAC(props.id);
               props.isRequestSubsButtonAC(false, props.id);
            })
      )
   };

   let Unfollow = () => {
      return (
         props.isRequestSubsButtonAC(true, props.id),
         UserAPI.followStatus(props.id)
            .then(data => {
               props.UnFollowAC(props.id);
               props.isRequestSubsButtonAC(false, props.id);
            })
      )
   };
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
                     ? <button disabled={props.VievCurrentUser.some(id => id === props.id)} className={c.Follow} onClick={Unfollow}> You follow</button>
                     : <button disabled={props.VievCurrentUser.some(id => id === props.id)} className={c.Unfollow} onClick={follow}>Follow</button>}
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