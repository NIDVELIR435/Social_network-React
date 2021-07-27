import React from "react";
import c from "./Main__CenterNews.module.css";

import Post from "../posts/new post/posts"

const CenterNews = (props) => {
   let Posts = props.HomePagesPost.map(d => <Post Message={d.Message} LikeCount={d.LikeCount} />)

   let NewPostCreate = React.createRef();

   let OnButtonClick_AddPost = () => {
      let text = NewPostCreate.current.value
      props.AddPost(text);
   };

   return (
      <div className={c.News}>
         <div className={c.newNews}>
            <textarea ref={NewPostCreate} className={c.Input} placeholder="Area for add you new post">
            </textarea>
            <div className={c.button}>
               <button onClick={OnButtonClick_AddPost}>Add post</button>
            </div>
         </div>
         {Posts}

      </div>
   )
};

export default CenterNews;
