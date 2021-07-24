import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import s from './app.module.css';

import Header from './components/Header/Header';
import Main__LeftProfileNav from './components/Main/main_leftProfileNav/Main__LeftProfileNav.js';
import Main__rightGridBar from './components/Main/Main__rightBar/Main__rightBar.js';
import Messages from './components/Messages/Messages.jsx';
import Main__CenterNews from './components/Main/Main__CenterNews/Main__CenterNews.js';
import Companies from './components/Companies/Companies';
import Projects from './components/Projects/Projects';
import Jobs from './components/Jobs/Jobs';
import Notification from './components/Notification/Notification';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.background}>
        <div className={s.background__Header}>
          <div className={s.container}>
            <Header />
          </div>
        </div>
        <div className={s.container}>
          <Main__LeftProfileNav />
          <Main__rightGridBar />
          <div className={s.Center__styles}>
            <Route path='/Messages' component={Messages} />
            <Route path='/Home' component={Main__CenterNews} />
            <Route path='/Companies' component={Companies} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Jobs' component={Jobs} />
            <Route path='/Notification' component={Notification} />
            <Route path='/Profile' component={Profile} />
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;

