import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserPhoto from '../../images/user.png'
import { UserAPI } from '../../../API/axios_api';

const FlexArea = styled.div`
   margin: 20px;
   display: flex;
   justify-content: center;
   `;
const Span = styled.span`
   color:#1ECEAB;
   `;
const SpanToStatus = styled(Span)`
   border: 2px solid #1ECEAB;
   background-color: #F2F2F2;
   border-radius: 0px 10px 10px 10px;
   padding: 5px;
   margin: 5px 0px 5px 70px;
   display: inline-block;
   min-width: 200px;
   text-align: center;
   `;
const InputArea = styled.input`
   color:blue;
   border: 2px solid blue;
   background-color: #F2F2F2;
   border-radius: 0px 10px 10px 10px;
   padding: 5px;
   min-width: 200px;
   margin: 5px 0px 5px 70px;
   text-align: center;
   `;
const AboutMember = styled.div`
      color:#1ECEAC
   `;
const LeftAreaDiv = styled.div`
   border-radius: 0px 10px 10px 10px;
`;

function Member_Profile(props) {
   let [state, setState] = useState(false);

   function onBlurFUNC(e) {
      setState(false)
      UserAPI.patchStatusMember(props.UserId, e.target.value);
   }

   return (
      <FlexArea>
         <LeftAreaDiv>
            <div className='avatar'>
               <img src={props.avatar != null ? props.avatar : UserPhoto} alt='avatar' />
            </div>
            <div className='fullName'>
               <Span>{props.firstName} {props.lastName}</Span>
            </div>
            {state === true
               ? <InputArea autoFocus
                  onBlur={onBlurFUNC}
                  onChange={(e) => props.VievCurrentUserMemberPageAC(e.target.value)}
                  value={props.status} />
               : <SpanToStatus onDoubleClick={() => setState(true)}>
                  {props.status ? props.status : 'Hello, visiter)'}
               </SpanToStatus>
            }
            <AboutMember>{props.aboutMember}</AboutMember>
         </LeftAreaDiv>
         <div className='right_area'>
            Right FlexArea area
         </div>
      </FlexArea>
   )
};
export default Member_Profile;