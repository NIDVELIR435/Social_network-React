import React from 'react';
import * as axios from 'axios';
import Member_Profile from './MemberProfile/Member_Profile';

class MemberProfileClassContainer extends React.Component {
   componentDidMount() { 
      //  this.props.IsFetchingStatusAC(true)
axios.get(`http://localhost:3000/UsersPage__List`)
   .then(response => {
      // this.props.IsFetchingStatusAC(false)
      this.props.SetUsersAC(response.data)
      // this.props.SetTotalListCountAC(response.headers["x-total-count"])   //? что бы найти целое число json списка, нужно найти свойство  header и обратиться к нему, как к елементу массива 
   });
}
   render() {
      return <Member_Profile />
   }

}
export default MemberProfileClassContainer;