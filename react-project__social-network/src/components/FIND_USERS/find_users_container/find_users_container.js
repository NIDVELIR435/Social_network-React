import React from 'react'
import { connect } from 'react-redux'
import { UnFollowAC, FollowAC, IsFetchingStatusAC, SetCurrentPageAC, SetTotalListCountAC, SetUsersAC } from '../../../Redux/reducer/UsersList-reducer';
import FindUsersAPIContainer from './find_users_API_Container/findUsersAPIContainer';


let StateToProps = (state) => {
   // debugger;
   return {
      users: state.UsersListReducer.UsersList,
      pageSize: state.UsersListReducer.pageSize,
      totalListCount: state.UsersListReducer.totalListCount,
      currentPage: state.UsersListReducer.currentPage,
      isFetching: state.UsersListReducer.isFetching,
   }
};

export default connect(StateToProps, {
   FollowAC, UnFollowAC,
   SetUsersAC, SetTotalListCountAC, SetCurrentPageAC, IsFetchingStatusAC,
})(FindUsersAPIContainer);
