import React from "react";

import s from "./posts.module.css";

const Post = (props) => {
   return (
      <div className={s.post}>
         <p>{props.Message}</p>
         <span>like: {props.LikeCount}</span>
      </div>
   )
};

export default Post;
