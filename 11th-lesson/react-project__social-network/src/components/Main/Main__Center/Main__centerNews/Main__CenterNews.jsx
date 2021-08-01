import React from "react";
import c from "./Main__CenterNews.module.css";
import Post from "../posts/new post/posts"
import { ADD_POST_FOR_HOME_BLOCK_, UPGRADE_CURRENT_TEXT_HOME_BLOCK_ } from '../../../../Redux/Store'
const CenterNews = (props) => {
   let Posts = props.HomePagesNewPosts.map(d => <Post Message={d.Message} LikeCount={d.LikeCount} />)
   let NewPostCreate = React.createRef();

   let OnButtonClick_AddPost = () => {
      let Text = NewPostCreate.current.value
      props.dispatch(ADD_POST_FOR_HOME_BLOCK_(Text));
   };
   let onPostChange = () => {
      let Text = NewPostCreate.current.value
      props.dispatch(UPGRADE_CURRENT_TEXT_HOME_BLOCK_(Text));
   };

   return (
      <div className={c.News}>
         <div className={c.newNews}>
            <textarea
               ref={NewPostCreate}
               className={c.Input}
               value={props.AppState.TextAreaCenterNewsValue}
               placeholder="Area for add you new post"
               onChange={onPostChange}
            />
            <div className={c.button}>
               <button onClick={OnButtonClick_AddPost}>Add post</button>
            </div>
         </div>
         {Posts}

      </div>
   )
};

export default CenterNews;
