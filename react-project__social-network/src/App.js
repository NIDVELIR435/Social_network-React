/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './app.module.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Main__rightGridBar from './components/Main/Main__rightBar/Main__rightBar.js'
import Container__Messages from './components/Messages/Container__Messages.jsx';
import Container__CenterNews from './components/Main/Main__Center/Main__centerNews/Container__Main__Center-News';
import Container__MemberProfile from './components/MemberProfile__Container/MemberProfile__Container';
import Main__leftProfileNav_container from './components/Main/main_leftProfileNav/Main__leftProfileNav_container/Main__LeftProfileNav_container';
import With__FindUsers from './components/find_users/find_users__composer';
import Companies from './components/Companies/Companies';
import Projects from './components/Projects/Projects';
import Jobs from './components/Jobs/Jobs';
import Notification from './components/Notification/Notification';
import Profile from './components/Profile/Profile';


const App = (props) => {
  return (
    <BackgroundDIV theme_mode={props.theme_mode}>
      <div className={s.container}>
        <Header />
      </div>
      <ContainerDIV>
        <Main__leftProfileNav_container />
        <Main__rightGridBar />
        <CenterStylesDIV theme_mode={props.theme_mode}>
          <Route path='/Messages' render={() => (<Container__Messages />)} />
          <Route path='/Home' render={() => (<Container__CenterNews />)} />
          <Route path='/Companies' render={Companies} />
          <Route path='/Projects' render={Projects} />
          <Route path='/Jobs' render={Jobs} />
          <Route path='/findUsers' render={() => (<With__FindUsers />)} /> {/* //*HOC(high order component/ компонент высшего порядка) */}
          <Route path='/Notification' render={Notification} />
          <Route path='/Profile' render={Profile} />
          <Route path='/memberProfile/:UserId?' render={() => (<Container__MemberProfile />)} />
        </CenterStylesDIV>
      </ContainerDIV>
    </BackgroundDIV>
  );
}

export default connect((state) => {
  return {
    theme_mode: state.theme_mode.theme_mode,
  }
})(App);

const BackgroundDIV = styled.div`
  background-color: ${(props) => (props.theme_mode === true ? '#686767' : '#f2f2f2')};
`;
const CenterStylesDIV = styled.div`
  background-color: ${(props) => (props.theme_mode === true ? 'grey' : 'white')};
  padding: 5px;
  margin-top: 80px;
  margin-right: 20px;
  margin-left: 20px;
  grid-row: 2;
  grid-column: 2;
  grid-area: mc;
  border-radius: 15px;
`;
const ContainerDIV = styled.div`
  width: 100%;
  margin: 0px auto;
  display: grid;
  grid-template-areas: 
  "h h h"
  "ml mc mr";
  grid-columns: 1fr 3fr 1fr;
  grid-template-columns: 1fr 3fr 1fr;
`;