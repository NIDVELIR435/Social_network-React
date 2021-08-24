import React from 'react'
import { connect } from 'react-redux'
import { FollowAC, SetUsersAC, UnFollowAC } from '../../../Redux/reducer/UsersForFindUsersPage-reducer';
import findUsers from '../findUsers'

let StateToProps = (state) => {
   debugger;
   return {
      users: state.UsersPage.UsersForFindUsersPageList
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
      }
   }
};

export default connect(StateToProps, DispatchToProps)(findUsers);
