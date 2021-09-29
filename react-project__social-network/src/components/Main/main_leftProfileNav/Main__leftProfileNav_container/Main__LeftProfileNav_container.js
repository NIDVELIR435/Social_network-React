// import React from 'react';
import { connect } from 'react-redux';
import Main__leftProfileNav from '../Main__LeftProfileNav';

let StateToProps = (state) => {
   return {
      Suggestions: state.listSuggestionForPeople.Suggestions,
      theme_mode: state.theme_mode.theme_mode,
   }
}
const Main__leftProfileNav_container = connect(StateToProps)(Main__leftProfileNav);
export default Main__leftProfileNav_container;