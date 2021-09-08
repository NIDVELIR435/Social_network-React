import React from 'react'
import { connect } from 'react-redux'
import { UnFollowAC, FollowAC, isRequestSubsButtonAC, onChangeTC, getUsersTC } from '../../../Redux/reducer/UsersList-reducer';
import FindUsersAPIContainer from './find_users_API_Container/findUsersAPIContainer';

let StateToProps = (state) => {
   return {
      users: state.UsersListReducer.UsersList,
      pageSize: state.UsersListReducer.pageSize,
      totalListCount: state.UsersListReducer.totalListCount,
      currentPage: state.UsersListReducer.currentPage,
      isFetching: state.UsersListReducer.isFetching,
      VievCurrentUser: state.UsersListReducer.VievCurrentUser,
   }
};

export default connect(StateToProps, {
   FollowAC, UnFollowAC, isRequestSubsButtonAC, getUsersTC, onChangeTC
})(FindUsersAPIContainer);
