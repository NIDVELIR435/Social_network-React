import React from "react";

import s from "./posts.module.css";

const Posts = (props) => {
   return (
      <div className={s.main__centerNews__post}>
         <p>{props.message}</p>
         <span>like: {props.likeCount}</span>
      </div>
   )
};

export default Posts;
