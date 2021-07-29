let Store = {
   _State: {
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
      HomePagesNewPosts: [
         { Message: "Hi, How are you", LikeCount: '4' },
         { Message: 'It`s my first post', LikeCount: "1" },
         { Message: 'It`s my second post', LikeCount: "2" }
      ],
      TextAreaCenterNewsValue: 'TextAreaCenterNewsValue',
   },
   _RerenderEntireTree() {
   },
   getState() {
      return this._State;
   },
   Action(newRerender) {
      return (
         this._RerenderEntireTree = newRerender
      )
   },
   // UpgradeNewPostText(newText) {
   //    return (Store._State.Messages.NewPostText = (newText),
   //       this._RerenderEntireTree()
   //    )
   // },
   // AddPostForMessage(PostMessage) {
   //    let NewPost = {
   //       id: 4,
   //       Message: PostMessage,
   //    };
   //    return this._State.Messages.Dialogs.push(NewPost),
   //       this._RerenderEntireTree()
   // },
   AddPostCenterNews(PostMessage) {
      let NewPost = {
         Message: PostMessage,
         LikeCount: '0'
      };
      return this._State.HomePagesNewPosts.push(NewPost),
         this._State.TextAreaCenterNewsValue = (''),
         this._RerenderEntireTree(this._State)
   },
   ChangedTextForButtonCenter(ChangeText) {
      return (
         this._State.TextAreaCenterNewsValue = (ChangeText),
         this._RerenderEntireTree(this._State)
      )
   },
   dispatch(action) {
      if (action.type === 'ADD_POST_FOR_MESSAGE_BLOCK') {
         let NewPost = {
            id: 4,
            Message: action.text,
         };
         return this._State.Messages.Dialogs.push(NewPost)
            this._RerenderEntireTree()
      } else if (action.type === 'UPGRADE_NEW_POST_TEXT_MESSAGE_BLOCK') {
         return (
            Store._State.Messages.NewPostText = (action.Text),
            this._RerenderEntireTree()
         )
      }
   }
}

export default Store;

// let RerenderEntireTree = () => {
// };





// export const Action = (newRerender) => {
//    return (
//       RerenderEntireTree = newRerender
//    )
// };

// let State = {
//    Messages: {
//       Dialogs: [
//          { id: 1, message: 'Hello, nice to meet you!' },
//          { id: 2, message: 'Hello, nice to meet you!' },
//          { id: 1, message: 'Hello, nice to meet you!' },
//          { id: 2, message: 'Hello, nice to meet you!' },
//          { id: 1, message: 'Hello, nice to meet you!' },
//          { id: 2, message: 'Hello, nice to meet you!' },
//       ],
//       Titles: [
//          { path: 1, name: 'Yaroslav' },
//          { path: 2, name: 'Victor' },
//          { path: 3, name: 'Lesya' },
//          { path: 4, name: 'Dima' },
//          { path: 5, name: 'Masha' },
//       ],
//       NewPostText: "value for posts",
//    },
//    Suggestions: [
//       { name: 'Yaroslav' },
//       { name: 'Victor' },
//       { name: 'Lesya' },
//       { name: 'Dima' },
//       { name: 'Masha' },
//    ],
//    HomePagesNewPosts: [
//       { Message: "Hi, How are you", LikeCount: '4' },
//       { Message: 'It`s my first post', LikeCount: "1" },
//       { Message: 'It`s my second post', LikeCount: "2" }
//    ],
//    TextAreaCenterNewsValue: 'TextAreaCenterNewsValue',
// }

// export let UpgradeNewPostText = (newText) => {
//    return (
//       State.Messages.NewPostText = (newText),
//       RerenderEntireTree()
//    )
// };

// export let AddPostForMessage = (PostMessage) => {
//    let NewPost = {
//       id: 4,
//       Message: PostMessage,
//    };
//    return (
//       State.Messages.Dialogs.push(NewPost),
//       RerenderEntireTree()
//    )
// };
// export let AddPostCenterNews = (PostMessage) => {
//    let NewPost = {
//       Message: PostMessage,
//       LikeCount: '0'
//    };
//    return (
//       State.HomePagesNewPosts.push(NewPost),
//       State.TextAreaCenterNewsValue = (''),
//       RerenderEntireTree(State)
//    )
// };
// export let ChangedTextForButtonCenter = (ChangeText) => {
//    return (
//       State.TextAreaCenterNewsValue = (ChangeText),
//       RerenderEntireTree(State)
//    )
// };