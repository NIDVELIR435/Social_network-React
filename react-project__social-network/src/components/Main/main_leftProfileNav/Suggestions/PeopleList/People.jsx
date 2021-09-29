import React from 'react'
import Title_item from '../../../../Messages/Dialog__title/Title';

const People = (props) => {
   let Suggestions = props.Suggestions.map((d,) => <Title_item key={d.id} path={d.path} name={d.name} />)
   return (
      <div>
         <div >
            {Suggestions}
         </div>
      </div>
   )
};

export default People;