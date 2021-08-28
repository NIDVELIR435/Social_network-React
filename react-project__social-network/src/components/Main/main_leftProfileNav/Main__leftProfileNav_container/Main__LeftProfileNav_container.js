// import React from 'react';
import { connect } from 'react-redux';
import Main__leftProfileNav from '../Main__LeftProfileNav';

// const LeftGridProfile = (props) => {
//    return (
//       <div className={c.profileLeftNav}>
//          <div className={c.Background__forAvatar}>
//             <div className={c.profileLeftNav__AvaAndName}>
//                <img src={avatar} alt="avatar" />
//                <div className={c.Name}>
//                   <h1 className="NameAndSurname"> Diana Smith</h1>
//                   <h3 className="wayDirectionValue">Designer</h3>
//                </div>
//             </div>
//          </div>
//          <Following canc="130" />
//          <Followers canc="23" />
//          <Link />
//          <Suggestions Titles={props.Dialogs} />
//       </div>

//    )
// };

let StateToProps = (state) => {
   return {
      Suggestions: state.listSuggestionForPeople.Suggestions,
   }
}
const Main__leftProfileNav_container = connect(StateToProps)(Main__leftProfileNav);
export default Main__leftProfileNav_container;