import React from 'react';
import s from './Messages.module.css';
import Title_item from './Dialog__title/Title.js';
import Dialog__item from './Dialog__item/Dialog__item';

const Messages = (props) => {
   return (
      <div className={s.Dialogs} >
         <div class={s.Dialog}>
            <Title_item path="1" name="Yaroslav" />
            <Title_item path="2" name="Victor" />
            <Title_item path="3" name="Lesya" />
            <Title_item path="4" name="Dima" />
            <Title_item path="5" name="Masha" />
         </div>
         <div class={s.Messages}>
            <Dialog__item message="Hello, nice to meet you!" />
         </div>
      </div>
   )
};
export default Messages;