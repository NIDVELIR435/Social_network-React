import React from 'react'
import styled from 'styled-components';
import People from './PeopleList/People';

const Suggestions = (props) => {
   return (
      <SuggestionsDIV theme_mode={props.theme_mode}>
         <NameDIV>
            Suggestions
         </NameDIV>
         <div>
            <People Suggestions={props.Suggestions} />
         </div>
      </SuggestionsDIV>
   )
}
export default Suggestions;

const SuggestionsDIV = styled.div`
   text-align: center;
   font-size: larger;
   background-color: ${props => props.theme_mode ? '#808080' : 'white'};
   padding: 15px 0px;
   margin-bottom: 2px;
   padding-bottom: 5px;
`;
const NameDIV = styled.div`
     text-align: left;
  padding-bottom: 10px;
  padding-left: 10px;
`;