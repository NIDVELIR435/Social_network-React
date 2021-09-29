import React from "react";
import Post from "../posts/posts.jsx"
import styled from "styled-components";

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
      <NewsDIV>
         <CurrentNewsDIV>
            <TextArea theme_mode={props.theme_mode} ref={NewPostCreate} value={props.OutContainerCurrentValue}
               placeholder="Area for add you new post"
               onChange={onPostChange} />
            <ButtonDIV theme_mode={props.theme_mode}>
               <Button theme_mode={props.theme_mode} onClick={OnButtonClick_AddPost}>Add post</Button>
            </ButtonDIV>
         </CurrentNewsDIV>
         {Posts}
      </NewsDIV>
   )
};

export default CenterNews;

const NewsDIV = styled.div`
   padding: 5px;
   margin-top: 10px;
   margin-right: 20px;
   margin-left: 20px;
   grid-area: mc;
`;

const CurrentNewsDIV = styled.div`
  display: flex;
  background-color: #fd8674bd;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
   background-color: ${(props) => (props.theme_mode === true ? 'grey' : 'white')};
   resize: none;
   width: 100%;
   border-radius: 5px;
   padding: 5px 10px;
`;
const Button = styled.button`
background-color: ${(props) => (props.theme_mode === true ? '#808080' : 'grey')};
   margin: 10px;
   padding: 10px;
   border-radius: 5px;
   `;

const ButtonDIV = styled.div`
   background-color: ${(props) => (props.theme_mode === true ? '#808080' : 'grey')};
   border-radius: 10px;
   width: 100px;
   margin: 5px 0px 5px 5px;
   padding: 10px;
`;