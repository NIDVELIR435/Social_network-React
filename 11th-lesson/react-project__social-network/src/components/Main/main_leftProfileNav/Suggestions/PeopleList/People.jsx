import React from 'react'
import c from './People.module.css';

const People = (props) => {
   return (
      <div className={c.People}>
         <div className={c.Name}>
            <p>{props.name}</p>
         </div>
      </div>
   )
};

export default People;