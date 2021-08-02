import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/Store'; //import redux Store from module redux
import { BrowserRouter } from 'react-router-dom';

let RerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App
               AppState={Store.getState()}
               dispatch={Store.dispatch.bind(Store)} />
         </BrowserRouter>
      </React.StrictMode>,
      document.querySelector('#root')
   );
};
RerenderEntireTree(Store.getState());
Store.subscribe(RerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

