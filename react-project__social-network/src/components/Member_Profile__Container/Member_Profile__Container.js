import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { VievCurrentUserAC } from '../../Redux/reducer/UsersList-reducer';
import Member_Profile from './Member_profile__item/Member_Profile.jsx'
import { UserAPI } from '../../API/axios_api';

class ClassContainer__MemberProfile extends React.Component {           //* создаем класовую компоненту
   componentDidMount() {
      debugger;
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

const WithRouterComponent__UserId = withRouter(ClassContainer__MemberProfile); //* оборачиваем контейнерную компонету

let StateToProps = (state) => {
   return (
      {
         avatar: state.UsersListReducer.VievCurrentUser.avatar,
         firstName: state.UsersListReducer.VievCurrentUser.firstName,
         lastName: state.UsersListReducer.VievCurrentUser.lastName,
         aboutMember: state.UsersListReducer.VievCurrentUser.previewtext,
      }
   )
};

export default connect(StateToProps, { VievCurrentUserAC })(WithRouterComponent__UserId); //* создаем контейнерную компоненту
