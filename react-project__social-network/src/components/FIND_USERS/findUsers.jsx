import React from 'react';
import c from './findUsers.module.css';
import UsersItem from './find_users_container/users__item/users__item';

const findUsers = (props) => {
   let UsersItemCard = props.users.map(u => <UsersItem 
      id={u.id} avatar={u.avatar} firstName={u.firstName} 
      lastName={u.lastName} previewtext={u.previewtext} 
      country={u.location.country} town={u.location.town} 
      followed={u.followed} follow={props.follow}
      unfollow={props.unfollow}/>)

   return (
      <div className={c.main}>
         <input type="text" value='Эта строка предназначена для поиска, но пока заглушена'/>
         <div className={c.gridArea}>
            {UsersItemCard}
         </div>
      </div>
   )
};

export default findUsers;