import React from 'react';
import { connect } from 'react-redux';
import { VievCurrentUserAC } from '../../Redux/reducer/UsersList-reducer';
import * as axios from 'axios';
import Member_Profile from './Member_profile__item/Member_Profile.jsx'
import { withRouter } from 'react-router-dom';

class ClassContainer__MemberProfile extends React.Component {
   componentDidMount() {
      let CurrentIdUser = this.props.match.params.UserId;
      axios.get(`http://localhost:3000/UsersPage__List/${CurrentIdUser}`)
         .then(response => {
            this.props.VievCurrentUserAC(response.data)
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

const WithRouterComponent__UserId = withRouter(ClassContainer__MemberProfile);

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

export default connect(StateToProps, { VievCurrentUserAC })(WithRouterComponent__UserId);
