import React from 'react'
import People from './PeopleList/People';
import c from './Suggestions.module.css';

const Suggestions = () => {
   return (
      <div className={c.Suggestions}>
         <div className={c.Name}>
            Suggestions
         </div>
         <div>
            <People name='Victoria' />
            <People name='Victoria' />
            <People name='Victoria' />
            <People name='Victoria' />
         </div>
      </div>
   )
}
export default Suggestions;