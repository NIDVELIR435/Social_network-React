import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { UnFollowAC, followTC, unfollowTC, FollowAC, isRequestSubsButtonAC, onChangeTC, getUsersTC } from '../../Redux/reducer/UsersList-reducer';

import Users from './Users/Users';

class FindUsersAPIContainer extends React.Component {
   componentDidMount() {
      this.props.getUsersTC(this.props.currentPage, this.props.pageSize);     //* обращаемся к THUNK creator что бы он создал санку и она подгрузила пользователей
   }
   onChangePage = (PageNumber) => {                                           //*меняет список и при нажатии на сгенерированую кнопку списка
      this.props.onChangeTC(PageNumber, this.props.pageSize)
   }

   render() {
      return <Users users={this.props.users}
         totalListCount={this.props.totalListCount}
         followTC={this.props.followTC}
         unfollowTC={this.props.unfollowTC}
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
};

export default compose(                                        //* делаем цепь промисов

   connect((state) => {                                        //* создаем контейнерный HOC(компонент высшего порядка) и передаем в него два парам, что генерят стейт и диспатч
      return {
         users: state.UsersListReducer.UsersList,
         pageSize: state.UsersListReducer.pageSize,
         totalListCount: state.UsersListReducer.totalListCount,
         currentPage: state.UsersListReducer.currentPage,
         isFetching: state.UsersListReducer.isFetching,
         VievCurrentUser: state.UsersListReducer.VievCurrentUser,
      }
   }, {
      FollowAC, UnFollowAC, isRequestSubsButtonAC,
      getUsersTC, onChangeTC, followTC,
      unfollowTC,
   })
)(FindUsersAPIContainer);


