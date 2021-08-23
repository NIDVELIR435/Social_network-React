import React from 'react'
import c from './Main__rightBar__Jobs.module.css';
import TopJobs from "./topJobs/TopJobs";

const Main__rightBar__Jobs = () => {
   return (
      <div className={c.header}>
         <TopJobs />
      </div>
   )
};

export default Main__rightBar__Jobs;