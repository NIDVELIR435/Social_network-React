import React from 'react';
import { connect } from 'react-redux';
import MemberProfileClassContainer from './Member_Profile__ClassContainer/MemberProfileClassContainer';
import { SetUsersAC } from '../../../Redux/reducer/UsersForFindUsersPage-reducer';

let StateToProps = (state) => {
   return {

   }

}

export default connect(StateToProps,{SetUsersAC})(MemberProfileClassContainer);
