import React from 'react'
import c from './TopJobs.module.css';

const TopJobs = (props) => {
   return (
      <div className={c.jobs}>
         {props.jobs}
      </div>
   )
};

export default TopJobs;