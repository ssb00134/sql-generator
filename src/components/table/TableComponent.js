import React from 'react';
import styled from 'styled-components';
import FlexDiv, { FlexDivItem } from '../common/FlexDiv';
import FlexForm from '../common/FlexForm';
import { MdAdd, MdRemoveCircleOutline } from 'react-icons/md';
import FlexInput from '../common/FlexInput';

const TableItem = ({ onChange, table, onRemove }) => {
  return (
    <FlexDiv row>
      <FlexInput value={table.table} onChange={onChange} />
      <input placeholder="alias" value={table.alias} />
      <div onClick={() => onRemove(table.id)}>
        <MdRemoveCircleOutline />
      </div>
    </FlexDiv>
  );
};

const TableComponent = ({
  input,
  tables,
  onChangeInput,
  onInsert,
  onRemove,
}) => {
  const onSubmit = (e) => {
    console.log('when table input : ' + input);
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const onChange = (e) => {
    onChangeInput(e.target.value);
  };

  return (
    <div>
      <h3>조회할 테이블을 입력하세요</h3>
      <FlexForm onSubmit={onSubmit}>
        <FlexInput value={input} onChange={onChange}></FlexInput>
        <button>
          <MdAdd />
        </button>
      </FlexForm>
      <FlexForm column>
        {tables.map((table) => (
          <TableItem table={table} onRemove={onRemove} key={table.id} />
        ))}
      </FlexForm>
    </div>
  );
};

export default TableComponent;
