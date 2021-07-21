import React from "react";
import c from "./Main__CenterNews.module.css";

import Posts from "./posts/new post/posts"

const CenterNews = () => {
   return (

      <div className={c.main__centerNews}>

         <div className={c.main__centerNews__column}>
            <p>here place for generate news</p>
         </div>
         <Posts message="Hi, How are you" likeCount='4' />
         <Posts message='It`s my first post' likeCount="1" />


      </div>
   )
};

export default CenterNews;
