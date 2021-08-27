import React from 'react';
import FetchingSVG from '../../images/Fetching.svg'
import c from './fetching.module.css'

const Fetching = () => {
   return (
      <div className={c.Fetching_div}>
         <img src={FetchingSVG} alt="LoadingLogo" />
      </div>
   )
};

export default Fetching;