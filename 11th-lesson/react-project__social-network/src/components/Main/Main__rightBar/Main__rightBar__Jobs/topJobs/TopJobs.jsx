import React from 'react'
import c from './TopJobs.module.css';

const TopJobs = (props) => {
   return (
      <div className ={c.Main}>
        <div className={c.Text}>
            <div className={c.Name}>
               
               {/* {props.Name} */}
               Senior PHP Developer
               </div>
            <div className={c.Discription}>
               {/* {props.Discription} */}
               
               Lorem ipsum dolor sit amet consectetur adipisicing elit ...

            </div>
        </div>
        <div className={c.Price}>
           {/* {props.Price} */}
           $25/hr
        </div>
      </div>
   )
};

export default TopJobs;