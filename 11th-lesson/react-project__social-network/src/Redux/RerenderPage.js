import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
//import reportWebVitals from './reportWebVitals';
//import State from '../Redux/State'; //export arrays
import { AddPost, UpgradeNewPostText, AddPostForMessage } from '../Redux/State'; //export function from Add new Post
//import {RerenderEntireTree} from '../src/Redux/RerenderPage';

export let RerenderEntireTree = (State) => {
   ReactDOM.render(
      <React.StrictMode>
         <App 
         AppState={State} 
         AddPost={AddPost} 
         UpgradeNewPostText={UpgradeNewPostText} 
         AddPostForMessage={AddPostForMessage}/>
      </React.StrictMode>,
      document.querySelector('#root')
   );
};

