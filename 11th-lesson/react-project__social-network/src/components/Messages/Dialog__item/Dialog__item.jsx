import React from 'react'
import c from './Dialog__item.module.css';

const Dialog__item = (props) => {
   return (
      <div className={c.item}>
         {props.message}
      </div>
   )
}
export default Dialog__item;