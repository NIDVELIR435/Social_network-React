import React from 'react';
import c from './users__item.module.css'
import UserPhoto from '../../../../../images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
// import { FollowAC, UnFollowAC } from '../../../../../../Redux/reducer/UsersList-reducer';

const UsersItem = (props) => {
   let follow = () => {
      return (
         axios.patch(`http://localhost:3000/UsersPage__List/${props.id}`,
            { 'followed': true })
            .then(response => {
               props.FollowAC(props.id)
               console.log(response.data);
            }))
   }

   let Unfollow = () => {
      return (
         axios.patch(`http://localhost:3000/UsersPage__List/${props.id}`,
            { 'followed': false })
            .then(response => {
               console.log(response.data);
               props.UnFollowAC(props.id)
            }))
   }

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
                     ? <button className={c.Follow} onClick={Unfollow}> You follow</button>
                     : <button className={c.Unfollow} onClick={follow}>Follow</button>}
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