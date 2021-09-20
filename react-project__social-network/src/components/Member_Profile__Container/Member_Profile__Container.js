import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { VievCurrentUserAC } from '../../Redux/reducer/UsersList-reducer';
import Member_Profile from './Member_profile__item/Member_Profile.jsx'
import { UserAPI } from '../../API/axios_api';


class ClassContainer__MemberProfile extends React.Component {           //* создаем класовую компоненту
   componentDidMount() {
      UserAPI.getUsersFromMemberPage(this.props.match.params.UserId)
         .then(res => {
            this.props.VievCurrentUserAC(res)
         });
   }
   render() {
      return <Member_Profile UserId={this.props.match.params.UserId}
         avatar={this.props.avatar}
         firstName={this.props.firstName}
         lastName={this.props.lastName}
         aboutMember={this.props.aboutMember} />
   }

};

export default compose(
   connect((state) => {
      return (
         {
            avatar: state.UsersListReducer.VievCurrentUser.avatar,
            firstName: state.UsersListReducer.VievCurrentUser.firstName,
            lastName: state.UsersListReducer.VievCurrentUser.lastName,
            aboutMember: state.UsersListReducer.VievCurrentUser.previewtext,
         }
      )
   }, { VievCurrentUserAC }),
   withRouter,
)(ClassContainer__MemberProfile);