import React from "react";
import c from "./Main__rightBar.module.css";
import Main__rightBar__Jobs from './Main__rightBar__Jobs/Main__rightBar__Jobs';
import Header from './Main__rightBar__header/Header';
const Main__rightGridBar = () => {
   return (
      <div className={c.main__rightBar}>
         <Header title='Track time on this.site)' h3='Pay only for the Hours worked' />
         <Main__rightBar__Jobs />
      </div>
   )
};

export default Main__rightGridBar;