import * as axios from 'axios';
import React from 'react';
import c from './findUsers.module.css';
import UsersItem from './find_users_container/users__item/users__item';

class FindUsers extends React.Component {
   componentDidMount() {
      // debugger;
      axios.get(`http://localhost:3000/UsersPage__List?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data)                                
            this.props.setTotalListCount(response.headers["x-total-count"])   //? что бы найти целое число json списка, нужно найти свойство  header и обратиться к нему, как к елементу массива 
         });
   }

   onChangePage = (PageNumber) => {                                           //*меняет список и при нажатии на сгенерированую кнопку списка
      this.props.setCurrentPage(PageNumber);
      axios.get(`http://localhost:3000/UsersPage__List?_page=${PageNumber}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data)
         });
   }

   render() {                                                                 //*render не отрисовывает jsx в html DOM, а передает реакту для отрисовки
      let UsersItemCard = this.props.users.map(u => <UsersItem
         id={u.id} avatar={u.avatar} firstName={u.firstName}
         lastName={u.lastName} previewtext={u.previewtext}
         country={u.location.country} town={u.location.town}
         followed={u.followed}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
      />)

      let pagesCount = Math.ceil(this.props.totalListCount / this.props.pageSize);
      let pages = [];

      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

      return (
         <div className={c.main}>
            <input type="text" value='Эта строка предназначена для поиска, но пока заглушена' />
            <div className={c.Numb_page_div}>
               {pages.map(p => {
                  return <button className={`
                     ${this.props.currentPage === p ? c.activePageNumb : ''} ${c.PageNumb}`}
                     onClick={(e) => { this.onChangePage(p) }}>{p}</button>
               })}
            </div>
            <div className={c.gridArea}>
               {UsersItemCard}
            </div>
         </div>
      )
   }
}

export default FindUsers;