import React from 'react';
import styled, { css } from 'styled-components';

const FlexDivBlock = styled.div`
  display: flex;
  over-flow: scroll;
  maxheight: 10%;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}
    ${(props) =>
      props.fullHeight &&
      css`
        height:100vh
      `}
`;

const FlexDivItemBlock = styled.div`
  ${(props) =>
    props.flex
      ? css`
          flex: ${props.flex};
        `
      : css`
          flex: 1;
        `};
`;

export const FlexDivItem = (props) => {
  return <FlexDivItemBlock {...props} />;
};

const FlexDiv = (props) => {
  return <FlexDivBlock {...props}></FlexDivBlock>;
};

export default FlexDiv;
