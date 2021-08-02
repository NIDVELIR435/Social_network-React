import React from 'react';
import s from './Messages.module.css'; //export module style for this component
import Dialog__item from './Dialog__item/Dialog__item';
import Title_item from './Dialog__title/Title.js';
import { ADD_POST_FOR_MESSAGE_BLOCK_, UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK_ } from '../../Redux/reducer/MessageBlock-reducer.js'

const Messages = (props) => {
   let Title = props.Titles.map(d => <Title_item path={d.path} name={d.name} />)
   let Dialog = props.Dialogs.map(d => <Dialog__item message={d.message} className={d.id} />)

   let TextArea = React.createRef();

   let Button_AddPost_MessagesBlock = () => {
      let Text = TextArea.current.value;
      props.dispatch(ADD_POST_FOR_MESSAGE_BLOCK_(Text));

   }
   let OnPostChange = () => {
      let Text = TextArea.current.value;
      props.dispatch(UPGRADE_CURRENT_TEXT_MESSAGE_BLOCK_(Text));
   }
   return (
      <div className={s.Dialogs}>
         <div class={s.Dialog}>
            {Title}
         </div>
         <div class={s.Messages}>
            {Dialog}
            <div className={s.InputArea}>

               <textarea
                  ref={TextArea}
                  className={s.Input}
                  placeholder="Area for add you new messages"
                  value={props.NewPostText}
                  onChange={OnPostChange} />
               <div className={s.button}>
                  <button onClick={Button_AddPost_MessagesBlock}>Add message</button>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Messages;