import React from 'react';
import styled from 'styled-components';
import FetchingSVG from '../../images/Fetching.svg'

const Fetching_div = styled.div`
   margin-left: 10px;  `;
const Img_styled = styled.img`
   width: 50px;
   height: 50px;  `;

const Fetching = () => {
   return (
      <Fetching_div>
            <Img_styled src={FetchingSVG} alt="LoadingLogo" />
      </Fetching_div>
   )
};

export default Fetching;