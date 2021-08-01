const ADD_POST_FOR_MESSAGE_BLOCK = 'ADD_POST_FOR_MESSAGE_BLOCK';
const UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK = 'UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK';
const ADD_POST_FOR_HOME_BLOCK = 'ADD_POST_FOR_HOME_BLOCK';
const UPGRADE_CURRENT_TEXT_HOME_BLOCK = 'UPGRADE_CURRENT_TEXT_HOME_BLOCK';


export const ADD_POST_FOR_MESSAGE_BLOCK_ = (Text) => ({
   type: ADD_POST_FOR_MESSAGE_BLOCK,
   TextForNewPost: Text
});
export const UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK_ = (Text) => ({
   type: UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK,
   UpgradeText: Text
});
export const ADD_POST_FOR_HOME_BLOCK_ = (Text) => ({
   type: ADD_POST_FOR_HOME_BLOCK,
   NewPostMessage: Text
});
export const UPGRADE_CURRENT_TEXT_HOME_BLOCK_ = (Text) => ({
   type: UPGRADE_CURRENT_TEXT_HOME_BLOCK,
   UpgradeText: Text,
});

let Store = {
   _State: {
      Messages: {
         Dialogs: [
            { id: 1, message: 'Hello, nice to meet you!' },
            { id: 2, message: 'Hello, nice to meet you!' },
            { id: 3, message: 'Hello, nice to meet you!' },
            { id: 4, message: 'Hello, nice to meet you!' },
            { id: 5, message: 'Hello, nice to meet you!' },
            { id: 6, message: 'Hello, nice to meet you!' },
         ],
         Titles: [
            { path: 1, name: 'Yaroslav' },
            { path: 2, name: 'Victor' },
            { path: 3, name: 'Lesya' },
            { path: 4, name: 'Dima' },
            { path: 5, name: 'Masha' },
         ],
      },
      Suggestions: [
         { name: 'Yaroslav' },
         { name: 'Victor' },
         { name: 'Lesya' },
         { name: 'Dima' },
         { name: 'Masha' },
      ],
      HomePagesNewPosts: [
         { Message: "Hi, How are you", LikeCount: '4' },
         { Message: 'It`s my first post', LikeCount: "1" },
         { Message: 'It`s my second post', LikeCount: "2" }
      ],
      NewPostText: "value for posts",
      TextAreaCenterNewsValue: 'TextAreaCenterNewsValue',
   },
   _RerenderEntireTree() {
   },
   getState() {
      return this._State;
   },
   Rerender(newRerender) {
      return (
         this._RerenderEntireTree = newRerender
      )
   },
   dispatch(action) {
      if (action.type === ADD_POST_FOR_MESSAGE_BLOCK) {
         let NewPost = {
            id: 7,
            message: action.TextForNewPost,
         }
         return (
            this._State.Messages.Dialogs.push(NewPost),
            this._State.NewPostText = (''),
            this._RerenderEntireTree()
         )
      } else if (action.type === UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK) {
         return (
            this._State.NewPostText = (action.UpgradeText),
            this._RerenderEntireTree()
         )
      } else if (action.type === ADD_POST_FOR_HOME_BLOCK) {
         let NewPost = {
            Message: action.NewPostMessage,
            LikeCount: '0'
         };
         return this._State.HomePagesNewPosts.push(NewPost),
            this._State.TextAreaCenterNewsValue = (''),
            this._RerenderEntireTree(this._State)
      } else if (action.type === UPGRADE_CURRENT_TEXT_HOME_BLOCK) {
         return (
            this._State.TextAreaCenterNewsValue = (action.UpgradeText),
            this._RerenderEntireTree(this._State)
         )
      }
   }
}

export default Store;