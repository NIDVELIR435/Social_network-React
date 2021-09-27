import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { VievCurrentUserAC, VievCurrentUserMemberPageAC } from '../../Redux/reducer/UsersList-reducer';
import MemberProfile from './Memberprofile__item/MemberProfile.jsx';
import { UserAPI } from '../../API/axios_api';

const MemberProfile__Hook = (props) => {           //* создаем класовую компоненту

   useEffect(() => {
      async function fetch() {
         let response = await UserAPI.getUsersFromMemberPage(props.match.params.UserId)
         props.VievCurrentUserAC(response)
      }
      fetch();
   }, [props.match.params.UserId])

   return (
      <MemberProfile UserId={props.match.params.UserId}
         avatar={props.avatar}
         status={props.status}
         firstName={props.firstName}
         lastName={props.lastName}
         aboutMember={props.aboutMember}
         VievCurrentUserMemberPageAC={props.VievCurrentUserMemberPageAC}
      />
   )
};

export default compose(
   connect((state) => {
      return (
         {
            avatar: state.UsersListReducer.VievCurrentUserMemberPage.avatar,
            status: state.UsersListReducer.VievCurrentUserMemberPage.status,
            firstName: state.UsersListReducer.VievCurrentUserMemberPage.firstName,
            lastName: state.UsersListReducer.VievCurrentUserMemberPage.lastName,
            aboutMember: state.UsersListReducer.VievCurrentUserMemberPage.previewtext,
         }
      )
   }, { VievCurrentUserAC, VievCurrentUserMemberPageAC }),
   withRouter,
)(MemberProfile__Hook);