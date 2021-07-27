import React from 'react'
import c from './People.module.css';
import Title_item from '../../../../Messages/Dialog__title/Title';

const People = (props) => {
    let Title = props.Titles.map(d => <Title_item path={d.path} name={d.name} />)
   return (
      <div className={c.People}>
         <div className={c.Name}>
            {/* <p>{props.name}</p> */}
            {Title}
         </div>
      </div>
   )
};

export default People;