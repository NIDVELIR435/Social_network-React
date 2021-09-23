import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { UnFollowAC, followTC, unfollowTC, FollowAC, isRequestSubsButtonAC, onChangeTC, getUsersTC } from '../../Redux/reducer/UsersList-reducer';

import Users from './Users/Users';

function FindUsersAPIContainer(props) {
   useEffect(() => {
      props.getUsersTC(props.currentPage, props.pageSize);     //* обращаемся к THUNK creator что бы он создал санку и она подгрузила пользователей
      console.log('effect')
   }, [])

   function onChangePage(PageNumber) {                                           //* replace list and after enter on botton list
      props.onChangeTC(PageNumber, props.pageSize)
   }
   return <Users users={props.users}
      totalListCount={props.totalListCount}
      followTC={props.followTC}
      unfollowTC={props.unfollowTC}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      onChangePage={onChangePage}
      UnFollowAC={props.UnFollowAC}
      FollowAC={props.FollowAC}
      isFetching={props.isFetching}
      VievCurrentUser={props.VievCurrentUser}
      isRequestSubsButtonAC={props.isRequestSubsButtonAC}
   />
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


