import React, { useEffect, useState } from 'react';
import logo from '../images/Header_logo.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { theme_modeAC } from './../../Redux/reducer/themeMode_reducer';

const HeaderComponent = (props) => {
   const [themeStatus, setThemeStatus] = useState(false);
   useEffect(() => {
      props.theme_modeAC(themeStatus)
   }, [themeStatus])
   return (
      <Header>
         <LogoAndSearchDIV>
            <Img src={logo} alt="logo" />
            <input type="text"></input>
         </LogoAndSearchDIV>
         <Nav>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/Home" >Home</NavLinkElem></NavDiv>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/Companies" >Companies</NavLinkElem></NavDiv>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/Projects" >Projects</NavLinkElem></NavDiv>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/Profile" >Profile</NavLinkElem></NavDiv>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/findUsers" >FindUsers</NavLinkElem></NavDiv>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/Jobs" >Jobs</NavLinkElem></NavDiv>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/Messages" >Messages</NavLinkElem></NavDiv>
            <NavDiv theme_mode={themeStatus}><NavLinkElem theme_mode={themeStatus} to="/Notificatiom" >Notification</NavLinkElem></NavDiv>
            {themeStatus === true
               ? <Button lightMode onClick={() => setThemeStatus(false)}>light mode</Button>
               : <Button onClick={() => setThemeStatus(true)}>Dark mode</Button>
            }
         </Nav>
      </Header>
   )
};

export default connect((state) => {
   return {
      theme_mode: state.theme_mode,
   }
}, { theme_modeAC })(HeaderComponent);

const Header = styled.header`
   padding: 5px;
  grid-area: h;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d55845;
`;
const LogoAndSearchDIV = styled.div`
  display: flex;
`;
const Nav = styled.div`
  display: flex;
  padding: 0px 0px;
`;
const NavDiv = styled.div`
   background-color: ${(props) => (props.theme_mode === true ? 'grey' : '#F2F2F2')};
   border-radius: 5px;
   padding:5px 3px;
   margin:5px;
   border:2px solid #F2F2F2;
`;
const NavLinkElem = styled(NavLink)`
   color:${(props) => (props.theme_mode === true ? '#F2F2F2' : 'black')};
   &.active {
      color: gold;
   }
`;
const Img = styled.img`
  width: 35px;
`;

const Button = styled.button`
   border-radius: 5px;
   padding: 0px 5px;
   background-color: ${(props) => (props.lightMode ? 'Grey' : 'white')};
   color:${(props) => (props.lightMode ? 'white' : 'black')};
   &.hover {
    color: gold;
  }
   `;
