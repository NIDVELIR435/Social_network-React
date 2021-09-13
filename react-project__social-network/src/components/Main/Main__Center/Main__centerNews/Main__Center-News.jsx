import React from "react";
import c from "./Main__CenterNews.module.css";
import Post from "../posts/posts.jsx"

const CenterNews = (props) => {
   let Posts = props.OutContainerPost.map((d) => <Post key={d.id} Message={d.Message} LikeCount={d.LikeCount} />)
   let NewPostCreate = React.createRef();
   let OnButtonClick_AddPost = () => {
      let Text = NewPostCreate.current.value
      props.ToContainerOnButtonClick_AddPost(Text);
   };
   let onPostChange = () => {
      let Text = NewPostCreate.current.value
      props.ToContainerOnPostChange(Text);
   };
   return (
      <div className={c.News}>
         <div className={c.newNews}>
            <textarea ref={NewPostCreate} className={c.Input} value={props.OutContainerCurrentValue}
               placeholder="Area for add you new post"
               onChange={onPostChange} />
            <div className={c.button}>
               <button onClick={OnButtonClick_AddPost}>Add post</button>
            </div>
         </div>
         {Posts}
      </div>
   )
};

export default CenterNews;
