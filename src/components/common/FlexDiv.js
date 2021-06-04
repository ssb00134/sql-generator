import React from 'react';
import styled from 'styled-components';

const FlexDivBlock = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => (props.type === 'col' ? 'column' : 'row')};
  over-flow: scroll;
  maxheight: 50%;
`;


const FlexDiv = ({ children, type }) => {
  return <FlexDivBlock type={type}>{children}</FlexDivBlock>;
};

export default FlexDiv;
