import React from 'react'
import People from './PeopleList/People';
import c from './Suggestions.module.css';

const Suggestions = (props) => {
   return (
      <div className={c.Suggestions}>
         <div className={c.Name}>
            Suggestions
         </div>
         <div>
            <People Suggestions={props.Suggestions} />
         </div>
      </div>
   )
}
export default Suggestions;