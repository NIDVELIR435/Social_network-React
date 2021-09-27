const ADD_POST_FOR_MESSAGE_BLOCK = 'ADD_POST_FOR_MESSAGE_BLOCK';
const UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK = 'UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK';

export const ADD_POST_FOR_MESSAGE_BLOCK_ = (Text) => ({
   type: ADD_POST_FOR_MESSAGE_BLOCK,
   TextForNewPost: Text
});
export const UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK_ = (Text) => ({
   type: UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK,
   UpgradeText: Text
});

let initialState = {
   Dialogs: [
      { id: 1, message: 'Hello, nice to meet you!' },
      { id: 2, message: 'Hello, nice to meet you!' },
      { id: 3, message: 'Hello, nice to meet you!' },
      { id: 4, message: 'Hello, nice to meet you!' },
      { id: 5, message: 'Hello, nice to meet you!' },
      { id: 6, message: 'Hello, nice to meet you!' },
   ],
   NewPostText: "value for posts",
};

let MessageBlockReducer = (State = initialState, action) => {
   switch (action.type) {
      case ADD_POST_FOR_MESSAGE_BLOCK:
         let NewPost = {
            id: 7,
            message: action.TextForNewPost,
         };
         return {
            ...State,                                  //i`m push to newState my State properties || 48 lesson
            Dialogs: [...State.Dialogs, NewPost],
            NewPostText: ''
         }
      case UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK:
         return {
            ...State,                                 //i`m push to newState my State properties || 48 lesson
            NewPostText: action.UpgradeText,
         }
      default:
         return State;
   }

}

export default MessageBlockReducer;