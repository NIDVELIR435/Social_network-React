import React from "react";
import { connect } from "react-redux";
import { ADD_POST_FOR_HOME_BLOCK_, UPGRADE_CURRENT_TEXT_HOME_BLOCK_ } from '../../../../Redux/reducer/HomeBlock-reducer';
import CenterNews from './Main__Center-News';

// const Container__CenterNews = (props) => {
//    let CurrentValue = props.ReduxStore.HomeBlockReducer.TextAreaCenterNewsValue;
//    let _OnButtonClick_AddPost = (Text) => {
//       props.dispatch(ADD_POST_FOR_HOME_BLOCK_(Text));
//    };
//    let _onPostChange = (Text) => {
//       props.dispatch(UPGRADE_CURRENT_TEXT_HOME_BLOCK_(Text));
//    };
//    return (
//       <CenterNews
//          ToContainerOnButtonClick_AddPost={_OnButtonClick_AddPost}
//          ToContainerOnPostChange={_onPostChange}
//          OutContainerCurrentValue={CurrentValue}
//          OutContainerPost={props.ReduxStore.HomeBlockReducer.HomePagesNewPosts} />
//    )
// };

let mapStateToProps = (state) => {
   return {
      OutContainerCurrentValue: state.HomeBlockReducer.TextAreaCenterNewsValue,
      OutContainerPost: state.HomeBlockReducer.HomePagesNewPosts
   }
};
let mapDispatchToProps = (dispatch) => {
   return {
      ToContainerOnButtonClick_AddPost: (Text) => { dispatch(ADD_POST_FOR_HOME_BLOCK_(Text)) },
      ToContainerOnPostChange: (Text) => { dispatch(UPGRADE_CURRENT_TEXT_HOME_BLOCK_(Text)) }
   }
};
const Container__CenterNews = connect(mapStateToProps, mapDispatchToProps)(CenterNews);
export default Container__CenterNews;
