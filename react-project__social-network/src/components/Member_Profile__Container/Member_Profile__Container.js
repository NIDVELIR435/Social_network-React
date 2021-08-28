import React from 'react';
import { connect } from 'react-redux';
import { SetUsersAC } from '../../Redux/reducer/UsersForFindUsersPage-reducer';
import * as axios from 'axios';
import Member_Profile from './Member_profile__item/Member_Profile.jsx'
import { withRouter } from 'react-router-dom';

class ClassContainer__MemberProfile extends React.Component {
   componentDidMount() {
      let CurrentIdUser = this.props.match.params.UserId;
      axios.get(`http://localhost:3000/UsersPage__List/${CurrentIdUser}`)
         .then(response => {
            this.props.SetUsersAC(response.data)
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
         avatar: state.UsersPageReducer.UsersForFindUsersPageList.avatar,
         firstName: state.UsersPageReducer.UsersForFindUsersPageList.firstName,
         lastName: state.UsersPageReducer.UsersForFindUsersPageList.lastName,
         aboutMember: state.UsersPageReducer.UsersForFindUsersPageList.previewtext,
      }
   )
};

export default connect(StateToProps, { SetUsersAC })(WithRouterComponent__UserId);
