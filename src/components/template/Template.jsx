import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette'

const TemplateBlock = styled.div`
 
  height: 100%;
  width: 50%;
  flex 1;
  border: 5px solid gray;
`;

const Template = ({ children  }) => {

  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
