import React from 'react';
import styled from 'styled-components';
import { FlexDivItem } from '../common/FlexDiv';
import FlexForm from '../common/FlexForm';

const FromComponentBlock = styled.form`
  display: flex;
`;

const FromComponent = () => {
  return (
    <div>
      <h3>조회할 테이블을 입력하세요</h3>
      <FlexForm row>
        <FlexDivItem flex="5">hello</FlexDivItem>
        <FlexDivItem>hello</FlexDivItem>
        <FlexDivItem>hello</FlexDivItem>
        <FlexDivItem>hello</FlexDivItem>
        <FlexDivItem>hello</FlexDivItem>
        <FlexDivItem>hello</FlexDivItem>
      </FlexForm>
    </div>
  );
};

export default FromComponent;
