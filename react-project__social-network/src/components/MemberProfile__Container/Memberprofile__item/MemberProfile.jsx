import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserPhoto from '../../images/user.png'
import { UserAPI } from '../../../API/axios_api';              //link to axios api


function MemberProfile(props) {
   let [state, setState] = useState(false);                    //check to input status
   let [value, setValue] = useState(props.status);             //change current value

   function onBlurFUNC(e) {
      setState(false)
      setValue(e.target.value);
   }
   useEffect(() => {

      UserAPI.patchStatusMember(props.UserId, value);
   }, [value]);
   return (
      <FlexArea>
         <LeftAreaDiv>
            <AvatarImg>
               <Img src={props.avatar != null ? props.avatar : UserPhoto} alt='avatar' />
            </AvatarImg>
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
         <RightAreaDiv>
            Right FlexArea area
         </RightAreaDiv>
      </FlexArea>
   )
};
export default MemberProfile;


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
   border: 2px solid green;
   background-color:#F2F2F2;
   border-radius: 5px;
   `;
const RightAreaDiv = styled.div`
   border: 2px solid green;
   background-color:#F2F2F2;
   border-radius: 5px;
   `;
const AvatarImg = styled.div`
   width: 100px;
   height: 100px;
   `;
const Img = styled.img`
   width: 100%;
   height: 100%;
   `;