//import React from 'react';
import { connect } from 'react-redux';
import { ADD_POST_FOR_MESSAGE_BLOCK_, UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK_ } from '../../Redux/reducer/MessageBlock-reducer.js'
import Messages from './Messages';

// const oldestContainer__Messages = (props) => {

//    let Titles = props.ReduxStore.listTitlesName_forMessages.Titles;
//    let Dialogs = props.ReduxStore.MessageBlockReducer.Dialogs;
//    let CurrentValue = props.ReduxStore.MessageBlockReducer.NewPostText;

//    let _Container__Button_AddPost_MessagesBlock = (Text) => {
//       props.dispatch(ADD_POST_FOR_MESSAGE_BLOCK_(Text));
//    }
//    let _Container__OnPostChange = (Text) => {
//       props.dispatch(UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK_(Text));
//    }
//    return (
//       <Messages
//          ToContainer__Button_AddPost_MessagesBlock={_Container__Button_AddPost_MessagesBlock}
//          ToContainer__OnPostChange={_Container__OnPostChange}
//          Titles={Titles}
//          Dialogs={Dialogs}
//          OutContainer={CurrentValue}
//       />
//    )
// };

let mapStateToProps = (state) => {
   return {
      OutContainer: state.MessageBlockReducer.NewPostText,
      Titles: state.listTitlesName_forMessages.Titles,
      Dialogs: state.MessageBlockReducer.Dialogs
   }
}
let mapStateToDispatch = (dispatch) => {
   return {
      ToContainer__Button_AddPost_MessagesBlock: (Text) => {
         dispatch(ADD_POST_FOR_MESSAGE_BLOCK_(Text));
      },
      ToContainer__OnPostChange: (Text) => {
         dispatch(UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK_(Text));
      }
   }
};
const Container__Messages = connect(mapStateToProps, mapStateToDispatch)(Messages);

export default Container__Messages;