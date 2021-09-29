import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = (props) => {
   return (
      <LinkDIV theme_mode={props.theme_mode}>
         <LinkNAVLINK to="/Profile">Viev Profile</LinkNAVLINK>
      </LinkDIV>
   )
};

export default Link;

const LinkDIV = styled.div `
   text-align: center;
   font-size: larger;
   background-color: ${props => props.theme_mode ? '#808080' : 'white'};
   padding: 15px 0px;
   margin-bottom: 1px;
`;

const LinkNAVLINK = styled(NavLink)`
   color: black;
`;
