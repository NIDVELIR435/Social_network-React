import React from 'react';
import avatar from '../../images/avatar.jpeg';
import Following from './Following';
import Followers from './Followers';
import Link from './Link';
import Suggestions from './Suggestions/Suggestions';
import styled from 'styled-components';

const Main__leftProfileNav = (props) => {
   return (
      <ProfileDIV>
         <BackgroundDIV theme_mode={props.theme_mode}>
            <AvatarAndNameDIV>
               <IMG src={avatar} alt="avatar" />
               <NameDIV>
                  <H1 className="NameAndSurname"> Diana Smith</H1>
                  <H3 className="wayDirectionValue">Designer</H3>
               </NameDIV>
            </AvatarAndNameDIV>
         </BackgroundDIV>
         <Following canc="130" theme_mode={props.theme_mode}/>
         <Followers canc="23" theme_mode={props.theme_mode}/>
         <Link theme_mode={props.theme_mode}/>
         <Suggestions Suggestions={props.Suggestions} theme_mode={props.theme_mode}/>
      </ProfileDIV>

   )
};

export default Main__leftProfileNav;

const ProfileDIV = styled.div`
   margin-top: 80px;
   margin-right: 20px;
   grid-area: ml;

`;
const BackgroundDIV = styled.div`
   background-color: ${props => props.theme_mode ? '#808080' : 'white'};
   margin-bottom: 2px;
   border-radius: 15px 15px 0px 0px;
`;
const AvatarAndNameDIV = styled.div`
   background: (linear, left top, left bottom, color-stop(50%, ${props => props.theme_mode ? '#808080' : '#DC8477'}), color-stop(50%, white));
   background: linear-gradient(to bottom, ${props => props.theme_mode ? '#808080' : '#DC8477'}50%, white 50%);
   width: 100%;
   height: 150px;
   display: inline-block;
   margin: 0px 0px 50px 0px;
   
`;
const IMG = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-style: solid;
  border-radius: 50px;
  border-width: 5px;
  border-color: white;
  margin: 20px auto 0px auto;
  `;
const NameDIV = styled.div`
  text-align: center;
  padding: 10px;
`;
const H1 = styled.h1`
  font-size: medium;
  padding: 5px;
`;
const H3 = styled.h3`
  font-size: smaller;
`;