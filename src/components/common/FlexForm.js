import React from 'react';
import styled, { css } from 'styled-components';

const FlexFormFormBlock = styled.form`
  display: flex;
  over-flow: scroll;
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
`;

const FlexForm = (props) => {
  return <FlexFormFormBlock {...props}></FlexFormFormBlock>;
};

export default FlexForm;
