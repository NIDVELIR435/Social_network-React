import React from 'react';
import styled from 'styled-components';
import UserPhoto from '../../images/user.png'
import { UserAPI } from './../../../API/axios_api';

const FlexArea = styled.div`
   margin: 20px;
   display: flex;
   justify-content: center;
   `;
const Span = styled.span`
   color:#1ECEAB;
   `;
const SpanToStatus = styled(Span)`
   color:#1ECEAB;
   border: 1px solid #1ECEAB;
   border-radius: 0px 10px 10px 10px;
   padding: 5px;
   margin: 5px 0px 5px 70px;
   display: inline-block;
   min-width: 100px;
   text-align: center;
   `;
const InputArea = styled.input`
   border: 1px solid red;
   border-radius: 5px;
   padding: 5px;
   `;
const AboutMember = styled.div`
      color:#1ECEAC
   `;

class Member_Profile extends React.Component {
   state = {
      editStatus: false
   }
   editStatusFUNC = () => {
      this.setState({
         editStatus: true,
      })
   }
   onChangeFUNC = (e) => {
      this.props.VievCurrentUserMemberPageAC(e.target.value)
   }
   onBlurFUNC = (e) => {
      UserAPI.patchStatusMember(this.props.UserId, e.target.value);
      this.setState({
         editStatus: false,
      })
   }
   render() {
      return <FlexArea>
         <div className='left_area'>
            <div className='avatar'>
               <img src={this.props.avatar != null ? this.props.avatar : UserPhoto} />
            </div>
            <div className='fullName'>
               <Span>{this.props.firstName} {this.props.lastName}</Span>
            </div>
            {this.state.editStatus === true
               ? <InputArea autoFocus
                  onBlur={this.onBlurFUNC}                                    
                  onChange={this.onChangeFUNC} value={this.props.status} />
               : <SpanToStatus onDoubleClick={() => this.editStatusFUNC(true)}>
                  {this.props.status ? this.props.status : 'Hello, visiter)'}
               </SpanToStatus>
            }
            <AboutMember>{this.props.aboutMember}</AboutMember>
         </div >
         <div className='right_area'>
            Right FlexArea area
         </div>
      </FlexArea>
   }
}
export default Member_Profile;