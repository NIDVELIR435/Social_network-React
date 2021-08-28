import React from 'react'
import { connect } from 'react-redux'
import { UnFollowAC, FollowAC, IsFetchingStatusAC, SetCurrentPageAC, SetTotalListCountAC, SetUsersAC } from '../../../Redux/reducer/UsersForFindUsersPage-reducer';
import FindUsersAPIContainer from './find_users_API_Container/findUsersAPIContainer';


let StateToProps = (state) => {
   return {
      users: state.UsersPageReducer.UsersForFindUsersPageList,
      pageSize: state.UsersPageReducer.pageSize,
      totalListCount: state.UsersPageReducer.totalListCount,
      currentPage: state.UsersPageReducer.currentPage,
      isFetching: state.UsersPageReducer.isFetching,
   }
};

export default connect(StateToProps, {
   FollowAC, UnFollowAC,
   SetUsersAC, SetTotalListCountAC, SetCurrentPageAC, IsFetchingStatusAC,
})(FindUsersAPIContainer);
