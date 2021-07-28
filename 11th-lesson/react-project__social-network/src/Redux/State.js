import Suggestions from "../components/Main/main_leftProfileNav/Suggestions/Suggestions";
import { RerenderEntireTree } from './RerenderPage';

let State = {
   Messages: {
      Dialogs: [
         { id: 1, message: 'Hello, nice to meet you!' },
         { id: 2, message: 'Hello, nice to meet you!' },
         { id: 1, message: 'Hello, nice to meet you!' },
         { id: 2, message: 'Hello, nice to meet you!' },
         { id: 1, message: 'Hello, nice to meet you!' },
         { id: 2, message: 'Hello, nice to meet you!' },
      ],
      Titles: [
         { path: 1, name: 'Yaroslav' },
         { path: 2, name: 'Victor' },
         { path: 3, name: 'Lesya' },
         { path: 4, name: 'Dima' },
         { path: 5, name: 'Masha' },
      ],
      NewPostText: "value for posts",
   },
   Suggestions: [
      { name: 'Yaroslav' },
      { name: 'Victor' },
      { name: 'Lesya' },
      { name: 'Dima' },
      { name: 'Masha' },
   ],
   HomePagesPosts: [
      { Message: "Hi, How are you", LikeCount: '4' },
      { Message: 'It`s my first post', LikeCount: "1" },
      { Message: 'It`s my second post', LikeCount: "2" }
   ],
}

export let UpgradeNewPostText = (newText) => {
   
   return (
      State.Messages.NewPostText = (newText),
      RerenderEntireTree(State)
   )
};

export let AddPostForMessage = (PostMessage) => {
   debugger;
   let NewPost = {
      id: 5,
      Message: {PostMessage},
   };
   return (
      State.Messages.Dialogs.push(NewPost),
      RerenderEntireTree(State)
   )
};

export let AddPost = (PostMessage) => {
   let NewPost = {
      Message: PostMessage,
      LikeCount: '0'
   };
   return (
      State.HomePagesPosts.push(NewPost),
      RerenderEntireTree(State)
   )
};


export default State;