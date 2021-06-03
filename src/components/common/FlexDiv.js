import React from 'react';
import styled from 'styled-components';

const FlexDivBlock = styled.div`
  display: flex;
  height: 100%;
`;

const FlexDiv = ({ children }) => {
  return <FlexDivBlock>{children}</FlexDivBlock>;
};

export default FlexDiv;
