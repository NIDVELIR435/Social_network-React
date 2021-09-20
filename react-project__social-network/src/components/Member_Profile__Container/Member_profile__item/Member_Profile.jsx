import React from 'react';
import UserPhoto from '../../images/user.png'
import styled from 'styled-components';

const FlexArea = styled.div`
   margin: 20px;
   display: flex;
   justify-content: center;`;
const Span = styled.span`
   color:#1ECEAB`;
const AboutMember = styled.div`
      color:#1ECEAC`;

const Member_Profile = (props) => {
   return (
      <FlexArea>
         <div className='left_area'>
            <div className='avatar'>
               <img src={props.avatar != null ? props.avatar : UserPhoto} />
            </div>
            <div className='fullName'>
               <Span>{props.firstName} {props.lastName}</Span>
            </div>
            <AboutMember>{props.aboutMember}</AboutMember>
         </div >
         <div className='right_area'>
            Right FlexArea area
         </div>
      </FlexArea>
   )

}
export default Member_Profile;