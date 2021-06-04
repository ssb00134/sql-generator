import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FlexDiv, { FlexDivItem } from '../common/FlexDiv';

const SelectBlock = styled.div`
  height: 100 vh;
`;


const Select = ({ columns }) => {
  console.log(columns);

  return (
    <SelectBlock>
      SELECT
      {columns.map((column) => (
        <FlexDiv key={column.id}>
          <FlexDivItem />
          <FlexDivItem flex="8" key={column.id} >
            {column.text}
            {column.id === columns.length - 1 ? ',' : ''}
          </FlexDivItem>
        </FlexDiv>
      ))}
    </SelectBlock>
  );
};
export default connect(
  ({ columns }) => ({
    columns: columns.columns,
  }),
  {},
)(Select);
