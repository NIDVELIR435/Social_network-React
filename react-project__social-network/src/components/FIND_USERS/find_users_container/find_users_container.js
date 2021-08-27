import React from 'react'
import { connect } from 'react-redux'
import { FollowAC, SetCurrentPageAC, SetTotalListCountAC, SetUsersAC, UnFollowAC } from '../../../Redux/reducer/UsersForFindUsersPage-reducer';
import findUsers from '../findUsersAPIContainer'

let StateToProps = (state) => {
   return {
      users: state.UsersPageReducer.UsersForFindUsersPageList,
      pageSize: state.UsersPageReducer.pageSize,
      totalListCount: state.UsersPageReducer.totalListCount,
      currentPage: state.UsersPageReducer.currentPage,
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
   }
};

export default connect(StateToProps, DispatchToProps)(findUsers);
