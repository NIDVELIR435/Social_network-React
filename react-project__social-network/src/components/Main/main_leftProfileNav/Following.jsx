import React from 'react'
import styled from 'styled-components';

const Following = (props) => {
   return (
      <FollowingDIV theme_mode={props.theme_mode}>
         <NameDIV>
            <h1> Following</h1>
         </NameDIV>
         <div >
            {props.canc}
         </div>
      </FollowingDIV>
   )
};

export default Following;

const FollowingDIV = styled.div`
   text-align: center;
   font-size: larger;
   background-color: ${props => props.theme_mode ? '#808080' : 'white'};;
   padding: 15px 0px;
   margin-bottom: 1px;
`;
const NameDIV = styled.div`
   color: #aaaaac;
   margin-bottom: 5px;
`;