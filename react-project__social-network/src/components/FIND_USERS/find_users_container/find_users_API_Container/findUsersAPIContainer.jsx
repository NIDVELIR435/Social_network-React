import React from 'react';
import Users from './find_users_present_copmonent/find_user';


class FindUsersAPIContainer extends React.Component {
   componentDidMount() {
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize);     //* обращаемся к THUNK creator что бы он создал санку и она подгрузила пользователей
   }
   onChangePage = (PageNumber) => {                                           //*меняет список и при нажатии на сгенерированую кнопку списка
      this.props.onChangeTC(PageNumber,this.props.pageSize)
   }

   render() {                                                                 //*render не отрисовывает jsx в html DOM, а передает реакту для отрисовки презентационную компоненту
      return <Users users={this.props.users}
         totalListCount={this.props.totalListCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onChangePage={this.onChangePage}
         UnFollowAC={this.props.UnFollowAC}
         FollowAC={this.props.FollowAC}
         isFetching={this.props.isFetching}
         VievCurrentUser={this.props.VievCurrentUser}
         isRequestSubsButtonAC={this.props.isRequestSubsButtonAC}
      />
   }
}

export default FindUsersAPIContainer;