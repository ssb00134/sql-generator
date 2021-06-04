import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FlexDiv from '../common/FlexDiv';

const SelectBlock = styled.div`
  height: 100 vh;
`;

const StyledColumnBlock = styled.div`
  display: flex;
`;

const Select = ({ children, columns }) => {
  console.log(columns);

  return (
    <SelectBlock>
      SELECT
      {columns.map((column)    => <FlexDiv key={column.id}>
        <div style={{ flex: 1 }}/>
        <div key={column.id} style={{ flex: 8 }}>
          {column.text}
          {column.id === columns.length - 1 ? ',' : ''}
      </div>
      </FlexDiv>)}
      {/* {columns.map((column) => (
        <FlexDiv key={column.id}>
          <div style={{ flex: 1 }}/>
          <div key={column.id} style={{ flex: 8 }}>
            {column}
            {column.id === columns.length - 1 ? '' : ','}
          </div>
          <div style={{ flex: 1 }}></div>
          <br />
        </FlexDiv>
      ))} */}
    </SelectBlock>
  );
};
export default connect(
  ({ columns }) => ({
    columns: columns.columns,
  }),
  {},
)(Select);
