import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette'

const TemplateBlock = styled.div`
  flex 1;
  border: 5px solid gray;
  maxHeight :100%;
`;

const Template = ({ children  }) => {

  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
