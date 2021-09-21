import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { VievCurrentUserAC, VievCurrentUserMemberPageAC } from '../../Redux/reducer/UsersList-reducer';
import Member_Profile from './Member_profile__item/Member_Profile.jsx';
import { UserAPI } from '../../API/axios_api';

class ClassContainer__MemberProfile extends React.Component {           //* создаем класовую компоненту
   componentDidMount() {
      UserAPI.getUsersFromMemberPage(this.props.match.params.UserId)
         .then(res => {
            this.props.VievCurrentUserAC(res)
         });
   }
   render() {
      // eslint-disable-next-line react/jsx-pascal-case
      return <Member_Profile UserId={this.props.match.params.UserId}
         avatar={this.props.avatar}
         status={this.props.status}
         firstName={this.props.firstName}
         lastName={this.props.lastName}
         aboutMember={this.props.aboutMember}
         VievCurrentUserMemberPageAC={this.props.VievCurrentUserMemberPageAC}
      />
   }

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
)(ClassContainer__MemberProfile);