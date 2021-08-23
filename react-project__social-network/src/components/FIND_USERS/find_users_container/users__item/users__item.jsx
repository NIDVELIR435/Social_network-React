import React from 'react';
import c from './users__item.module.css'

const UsersItem = (props) => {
   return (
      < div >
         <div className={c.cardItem}>
            <div className={c.avatar}>
               avatar
            </div>
            <div className={c.text}>
               <div className={c.name}>
                  <div className={c.firstName}>Name</div>
                  <div className={c.lastName}>Surname</div>
               </div>
               <div className={c.status}>
                  current status
               </div>
            </div>
         </div>
      </div >
   )
};

export default UsersItem;