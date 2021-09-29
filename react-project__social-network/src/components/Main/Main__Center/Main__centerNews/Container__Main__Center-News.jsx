import React from "react";
import { connect } from "react-redux";
import { ADD_POST_FOR_HOME_BLOCK_, UPGRADE_CURRENT_TEXT_HOME_BLOCK_ } from '../../../../Redux/reducer/HomeBlock-reducer';
import CenterNews from './Main__Center-News';

let mapStateToProps = (state) => {
   return {
      OutContainerCurrentValue: state.HomeBlockReducer.TextAreaCenterNewsValue,
      OutContainerPost: state.HomeBlockReducer.HomePagesNewPosts,
      theme_mode: state.theme_mode.theme_mode,
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
