import * as axios from 'axios';
import React from 'react';
import Users from './find_users_present_copmonent/find_user';


class  FindUsersAPIContainer extends React.Component {
   componentDidMount() {
      this.props.IsFetchingStatusAC(true)
      axios.get(`http://localhost:3000/UsersPage__List?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.IsFetchingStatusAC(false)
            this.props.SetUsersAC(response.data)
            this.props.SetTotalListCountAC(response.headers["x-total-count"])   //? что бы найти целое число json списка, нужно найти свойство  header и обратиться к нему, как к елементу массива 
         });
   }

   onChangePage = (PageNumber) => {                                           //*меняет список и при нажатии на сгенерированую кнопку списка
      this.props.SetCurrentPageAC(PageNumber);
      this.props.IsFetchingStatusAC(true)
      axios.get(`http://localhost:3000/UsersPage__List?_page=${PageNumber}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.IsFetchingStatusAC(false)
            this.props.SetUsersAC(response.data)
         });
   }

   render() {                                                                 //*render не отрисовывает jsx в html DOM, а передает реакту для отрисовки презентационную компоненту
      return <Users users={this.props.users}
         totalListCount={this.props.totalListCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onChangePage={this.onChangePage}
         unFollow={this.props.UnFollowAC}
         follow={this.props.FollowAC}
         isFetching={this.props.isFetching}
      />
   }
}

export default FindUsersAPIContainer;