import Suggestions from "../components/Main/main_leftProfileNav/Suggestions/Suggestions";
import { RerenderEntireTree} from './RerenderPage';

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
      ]
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

export let AddPost2 = (PostMessage2) => {
   let NewMessage = {
      id: 0,
      message: PostMessage2,
   };
   return (
      State.Messages.Dialogs.push(NewMessage),
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