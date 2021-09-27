/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Messages.module.css';
import Dialog__item from './Dialog__item/Dialog__item';
import Title_item from './Dialog__title/Title.js';

const Messages = (props) => {
   let Title = props.Titles.map(d => <Title_item key={d.path}path={d.path} name={d.name} />)
   let Dialog = props.Dialogs.map(d => <Dialog__item key={d.id} message={d.message} className={d.id} />)
   let TextArea = React.createRef();
   
   let Button_AddPost_MessagesBlock = () => {
      let Text = TextArea.current.value;
      props.ToContainer__Button_AddPost_MessagesBlock(Text);
   }
   let OnPostChange = () => {
      let Text = TextArea.current.value;
      props.ToContainer__OnPostChange(Text);
   }
   return (
      <div className={s.Dialogs}>
         <div className={s.Dialog}>
            {Title}
         </div>
         <div className={s.Messages}>
            {Dialog}
            <div className={s.InputArea}>

               <textarea
                  ref={TextArea}
                  className={s.Input}
                  placeholder="Area for add you new messages"
                  value={props.OutContainer}
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