/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Fetching from '../../common_component/fetching/fetching';
import c from './Users.module.css';
import Users_item from './Users__item/Users__item.jsx';

const Users = (props) => {
   let UsersItemCard = props.users.map(u => <Users_item
      key={u.id} id={u.id} avatar={u.avatar} firstName={u.firstName}
      lastName={u.lastName} previewtext={u.previewtext}
      country={u.location.country} town={u.location.town}
      followed={u.followed}
      FollowAC={props.FollowAC}
      UnFollowAC={props.UnFollowAC}
      followTC={props.followTC}
      unfollowTC={props.unfollowTC}
      VievCurrentUser={props.VievCurrentUser}
      isRequestSubsButtonAC={props.isRequestSubsButtonAC}
   />);

   let pagesCount = Math.ceil(props.totalListCount / props.pageSize);
   let pages = [];

   for (let i = 1; i <= pagesCount; i++) { pages.push(i); }

   return < div className={c.main} >
      <input type="text" defaultValue='Эта строка предназначена для поиска, но пока заглушена' />
      <div className={c.Numb_page_div}>
         {pages.map(p => {
            return <button key={p.toString()} className={`
                           ${props.currentPage === p ? c.activePageNumb : ''} ${c.PageNumb}`}
               onClick={(e) => { props.onChangePage(p) }}>{p}</button>
         })}
      </div>
      <div className={c.gridArea}>
         {props.isFetching ? <Fetching /> : UsersItemCard}
      </div>
   </div >
}
export default Users;