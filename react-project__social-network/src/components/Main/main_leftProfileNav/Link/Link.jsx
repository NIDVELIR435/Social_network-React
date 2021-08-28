import React from 'react'
import c from './Link.module.css'
import { NavLink } from 'react-router-dom';

const Link = () => {
   return (
      <div className={c.Link}>
         <NavLink to="/Profile" activeClassName={c.active}>Viev Profile</NavLink>
      </div >
   )
};

export default Link;