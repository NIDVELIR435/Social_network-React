import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Title.module.css';



const Title = (props) => {
   return (
      <div className={c.Title}>
         <NavLink to={"/Messages/" + props.path}>
            <div className={c.avatar}>
               {props.ava}
            </div>
            <div className={c.Name}>
               {props.name}
            </div>
         </NavLink>
      </div>
   )
};
export default Title;