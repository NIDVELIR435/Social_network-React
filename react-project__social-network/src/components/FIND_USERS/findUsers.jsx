import * as axios from 'axios';
import React from 'react';
import c from './findUsers.module.css';
import UsersItem from './find_users_container/users__item/users__item';


class FindUsers extends React.Component {
   constructor(props) {
      super(props);

      axios.get("http://localhost:3000/UsersPage__List")
         .then(response => {
            this.props.setUsers(response.data.UsersForFindUsersPageList[0])
         });
   }
   render() {
      let UsersItemCard = this.props.users.map(u => <UsersItem
         id={u.id} avatar={u.avatar} firstName={u.firstName}
         lastName={u.lastName} previewtext={u.previewtext}
         country={u.location.country} town={u.location.town}
         followed={u.followed}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
      />)

      return (
         <div className={c.main}>
            <input type="text" value='Эта строка предназначена для поиска, но пока заглушена' />
            <div className={c.gridArea}>
               {UsersItemCard}
            </div>
         </div>
      )
   }
}





// const findUsers = (props) => {
// axios.get("http://localhost:3000/UsersPage__List")
// .then(response => {props.setUsers(response.data.UsersForFindUsersPageList)});
// let UsersItemCard = props.users.map(u => <UsersItem
//    id={u.id} avatar={u.avatar} firstName={u.firstName}
//    lastName={u.lastName} previewtext={u.previewtext}
//    country={u.location.country} town={u.location.town}
//    followed={u.followed} follow={props.follow}
//    unfollow={props.unfollow} />)
// return (
//    <div className={c.main}>
//       <input type="text" value='Эта строка предназначена для поиска, но пока заглушена' />
//       <div className={c.gridArea}>
//          {UsersItemCard}
//       </div>
//    </div>
// )
// };

export default FindUsers;