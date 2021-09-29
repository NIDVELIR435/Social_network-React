import React from 'react'
import styled from 'styled-components';

const Followers = (props) => {
   return (
      <FollowersDIV theme_mode={props.theme_mode}>
         <NameDIV>
            <h1>Followers</h1>
         </NameDIV>
         <div>
            {props.canc}
         </div>
      </FollowersDIV>
   )
};

export default Followers;

const FollowersDIV =styled.div`
     text-align: center;
  font-size: larger;
   background-color: ${props => props.theme_mode ? '#808080' : 'white'};
  padding: 15px 0px;
  margin-bottom: 1px;
`;

const NameDIV =styled.div`
     color: #aaaaac;
  margin-bottom: 5px;
`;