import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/State'; //export function from Add new Post

debugger;
let RerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            ChangedTextForButtonCenter={Store.ChangedTextForButtonCenter}
            AppState={Store.getState()}
            AddPostCenterNews={Store.AddPostCenterNews}
            UpgradeNewPostText={Store.UpgradeNewPostText}
            AddPostForMessage={Store.AddPostForMessage} />
      </React.StrictMode>,
      document.querySelector('#root')
   );
};
RerenderEntireTree(Store.getState());
Store.Action(RerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

