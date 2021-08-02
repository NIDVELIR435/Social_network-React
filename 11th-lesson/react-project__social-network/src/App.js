import React from 'react';
import { Route, } from 'react-router-dom';
import s from './app.module.css';

import Header from './components/Header/Header';
import Main__LeftProfileNav from './components/Main/main_leftProfileNav/Main__LeftProfileNav.js';
import Main__rightGridBar from './components/Main/Main__rightBar/Main__rightBar.js'
import Messages from './components/Messages/Messages.jsx';
import MainCenter from './components/Main/Main__Center/Main__centerNews/Main__CenterNews.jsx';
import Companies from './components/Companies/Companies';
import Projects from './components/Projects/Projects';
import Jobs from './components/Jobs/Jobs';
import Notification from './components/Notification/Notification';
import Profile from './components/Profile/Profile';
const App = (props) => {
 // debugger;
  return (
    <div className={s.background}>
      <div className={s.background__Header}>
        <div className={s.container}>
          <Header />
        </div>
      </div>
      <div className={s.container}>
        <Main__LeftProfileNav Dialogs={props.AppState.listSuggestionForPeopleJSX.Suggestions} />
        <Main__rightGridBar />
        <div className={s.Center__styles}>
          <Route path='/Messages'
            render={() => (<Messages
              Dialogs={props.AppState.MessageBlockReducer.Dialogs}
              Titles={props.AppState.listTitlesName_forMessages.Titles}
              NewPostText={props.AppState.MessageBlockReducer.NewPostText}
              dispatch={props.dispatch}
            />)} />
          <Route path='/Home'
            render={() => (<MainCenter
              HomePagesNewPosts={props.AppState.HomeBlockReducer.HomePagesNewPosts}
              dispatch={props.dispatch}
              AppState={props.AppState} />)} />
          <Route path='/Companies' render={Companies} />
          <Route path='/Projects' render={Projects} />
          <Route path='/Jobs' render={Jobs} />
          <Route path='/Notification' render={Notification} />
          <Route path='/Profile' render={Profile} />
        </div>
      </div>
    </div>
  );
}

export default App;

