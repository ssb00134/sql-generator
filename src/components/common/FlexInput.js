import React from 'react';
import styled, { css } from 'styled-components';

const FlexInputBlock = styled.input`
  ${(props) =>
    props.flex
      ? css`
          flex: ${props.flex};
        `
      : css`
          flex: 1;
        `};
`;

const FlexInput = (props) => {
  return <FlexInputBlock {...props}></FlexInputBlock>;
};

export default FlexInput;
