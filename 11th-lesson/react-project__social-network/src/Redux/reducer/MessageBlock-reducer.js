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

let MessageBlockReducer = (State, action) => {
   switch (action.type) {
      case ADD_POST_FOR_MESSAGE_BLOCK:
         let NewPost = {
            id: 7,
            message: action.TextForNewPost,
         };
         State.Messages.Dialogs.push(NewPost);
         State.NewPostText = ('');
         return State;
      case UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK:
         State.NewPostText = (action.UpgradeText);
         return State;

      default:
         return State;
   }
  
}

export default MessageBlockReducer;