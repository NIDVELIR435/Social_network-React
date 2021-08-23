import React from 'react'
import c from './Header.module.css';

const Header = (props) => {
   return (
      <div className={c.Header}>
         <div className={c.TrackTimer}>
            <h1>{props.title}</h1>
            <h3>{props.h3}</h3>
         </div>
      </div>
   )
};

export default Header;