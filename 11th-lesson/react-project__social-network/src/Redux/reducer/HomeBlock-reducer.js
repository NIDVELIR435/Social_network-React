const ADD_POST_FOR_HOME_BLOCK = 'ADD_POST_FOR_HOME_BLOCK';
const UPGRADE_CURRENT_TEXT_HOME_BLOCK = 'UPGRADE_CURRENT_TEXT_HOME_BLOCK';


export const ADD_POST_FOR_HOME_BLOCK_ = (Text) => ({
   type: ADD_POST_FOR_HOME_BLOCK,
   NewPostMessage: Text
});
export const UPGRADE_CURRENT_TEXT_HOME_BLOCK_ = (Text) => ({
   type: UPGRADE_CURRENT_TEXT_HOME_BLOCK,
   UpgradeText: Text,
});

let HomeBlockReducer = (State, action) => {
   switch (action.type) {
      case ADD_POST_FOR_HOME_BLOCK:
         let NewPost = {
            Message: action.NewPostMessage,
            LikeCount: '0'
         };
         State.HomePagesNewPosts.push(NewPost);
         State.TextAreaCenterNewsValue = ('');
         return State;
      case UPGRADE_CURRENT_TEXT_HOME_BLOCK:
         State.TextAreaCenterNewsValue = (action.UpgradeText);
         return State;
      default:
         return State;

   }
}

export default HomeBlockReducer;