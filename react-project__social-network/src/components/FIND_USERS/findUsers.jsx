import React from 'react';
import c from './findUsers.module.css';
import UsersItem from './find_users_container/users__item/users__item';

const findUsers = (props) => {
   // debugger;
   return (
      <div className={c.gridArea}>
         <UsersItem UsersPage={props.users} />
      </div>
   )
};

export default findUsers;