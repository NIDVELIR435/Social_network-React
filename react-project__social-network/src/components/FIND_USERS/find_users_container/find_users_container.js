import React from 'react'
import { connect } from 'react-redux'
import { FollowAC, IsFetchingStatusAC, SetCurrentPageAC, SetTotalListCountAC, SetUsersAC, UnFollowAC } from '../../../Redux/reducer/UsersForFindUsersPage-reducer';
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
let DispatchToProps = (dispatch) => {
   return {
      follow: (UserId) => {
         dispatch(FollowAC(UserId))
      },
      unfollow: (UserId) => {
         dispatch(UnFollowAC(UserId))
      },
      setUsers: (Users) => {
         dispatch(SetUsersAC(Users))
      },
      setTotalListCount: (TotalNumb) => {
         dispatch(SetTotalListCountAC(TotalNumb))
      },
      setCurrentPage: (PageNumb) => {
         dispatch(SetCurrentPageAC(PageNumb))
      },
      IsFetchingStatus: (isFetching) => {
         dispatch(IsFetchingStatusAC(isFetching))
      },
   }
};

export default connect(StateToProps, DispatchToProps)(FindUsersAPIContainer);
