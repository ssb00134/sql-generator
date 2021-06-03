import React from 'react';
import styled from 'styled-components';
import FlexDiv from '../common/FlexDiv';

const SelectBlock = styled.div`
  height: 100 vh;
`;

const StyledColumnBlock = styled.div`
  display: flex;
`;

const Select = ({ children }) => {
  const columnArray = [
    'col11231232222222222222222222222222222222222222222222222222',
    'col2',
    'col3',
    'col4',
    'col5',
    'col6',
  ];
  return (
    <SelectBlock>
      SELECT
      {columnArray.map((item, index) => (
        <FlexDiv key={index}>
          <div style={{ flex: 1 }}></div>
          <div key={index} style={{ flex: 8 }}>
            {item}
            {index === columnArray.length - 1 ? '' : ','}
          </div>
          <div style={{ flex: 1 }}></div>
          <br />
        </FlexDiv>
      ))}
    </SelectBlock>
  );
};

export default Select;
