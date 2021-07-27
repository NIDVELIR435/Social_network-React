import React from "react";
import c from "./Main__rightBar.module.css";
import TopJobs from "./topJobs/TopJobs";

const Main__rightGridBar = () => {
   return (
      <div className={c.main__rightBar}>
         <TopJobs jobs='Senior Product designer' />
      </div>
   )
};

export default Main__rightGridBar;