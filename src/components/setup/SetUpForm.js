import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdAdd,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import FlexDiv from '../common/FlexDiv';
import FlexForm from '../common/FlexForm';


const SetUpFormBlock = styled.div`
  height: 40%;
`;

export const StyledSetupInsert = styled.form`
  display: flex;
  background: $495057;
`;
export const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: black;
  &::placeholder {
    color: #dee2e6;
  }
  // 버튼을 제외한 영역을 모두 차지하기
  flex: 1;
`;

export const StyledButton = styled.button`
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
    background: #adb5bd;
    }
}
`;
export const SetUpList = styled.div`
  overflow: scroll;
  max-height: 300px;
`;
export const StyledSepupListItem = styled.div`
    padding: 1rem;
  display: flex;
  align-items: center; // 세로 중앙 정렬
  &:nth-child(even) {
    background: #f8f9fa;
  }
  // 엘리먼트 사이사이에 테두리를 넣어줌
  & + & {
    border-top: 1px solid #dee2e6;
  }
  // 체크되었을 때 보여줄 스타일
    &.checked {
        svg {
        color: #22b8cf;
        }
        .text {
        color: #adb5bd;
        text-decoration: line-through;
        }
    }
  }
`;
export const StyledRemove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;
export const StyledCheckbox = styled.div`
  cursor: pointer;
  align-items: center; // 세로 중앙 정렬
  svg {
    // 아이콘
    font-size: 1.5rem;
  }
`;

export const StyledText = styled.input`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 영역 모두 차지
`;


const textMap = {
  column: '컬럼',
  condition: '조건',
};


const ColumnItem = ({ type, column, onRemove }) => {
  return (
    <FlexDiv>
      {type == 'condition' && (
        <StyledCheckbox>
          <MdCheckBoxOutlineBlank />
        </StyledCheckbox>
      )}
      <StyledText placeholder={type} />
      {type == 'condition' && <StyledText placeholder={type} />}
      <StyledRemove onClick={()=>{onRemove(column.id)}}>
        <MdRemoveCircleOutline />
      </StyledRemove>
    </FlexDiv>
  );
};

const SetUpForm = ({
  type,
  input,
  columns,
  onInsert,
  onChangeInput,
  onRemove,
}) => {
  const text = textMap[type];

  const onSubmit = (e) => {
    e.preventDefault();
    input.toUpperCase().split(/,|\s|\t|\n/).map((item)=>onInsert(item));
    onChangeInput('');
  };
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };

  return (
    <SetUpFormBlock>
      <h3>{text}를 입력하세요</h3>
      <FlexForm onSubmit={onSubmit}>
        <StyledInput value={input} onChange={onChange} />
        <StyledButton>
          <MdAdd />
        </StyledButton>
      </FlexForm>

      <FlexDiv column>
        {columns.map((column) => (
          <ColumnItem
            type={type}
            column={column}
            key={column.id}
            onRemove={onRemove}
          />
        ))}
      </FlexDiv>
    </SetUpFormBlock>
  );
};

export default SetUpForm;
