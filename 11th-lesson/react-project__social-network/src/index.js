import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// let RerenderEntireTree = (
// state
// ) => {
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App
            // ReduxStore={state}
            // dispatch={Store.dispatch.bind(Store)}
            />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.querySelector('#root')
);
// };
// RerenderEntireTree(
//    store.getState()
// );
//Store.subscribe(() => {                             <-i`m put away my function with loading my store(my redux)
//let state = Store.getState();
//RerenderEntireTree(state);
//});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

