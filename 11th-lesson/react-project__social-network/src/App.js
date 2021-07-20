import React from 'react';
import './app.css';

import Header from './components/Header';
import Main__LeftProfileNav from './components/Main__LeftProfileNav';
import Main__CenterNews from './components/Main__CenterNews.jsx';
import Main__rightGridBar from './components/Main__rightBar';


const App = () => {
  return (
    <div className="container">
      <Header />
      <Main__LeftProfileNav />
      <Main__CenterNews />
      <Main__rightGridBar />
    </div>
  );
}

export default App;

