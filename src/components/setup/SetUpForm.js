import React, { useState } from 'react';
import styled from 'styled-components';
import SetupInsert from '../setup/SetupInsert';
import SetUpList from './SetUpList';
import SetupListItem from './SetupListItem';

const SetUpFormBlock = styled.div`
  height: 40%;
`;

const textMap = {
  column: '컬럼',
  condition: '조건',
};

const SetUpForm = ({ type, form, onChange, onSubmit }) => {
  console.log(`SetUpForm onchange : ${onChange}`);
  const [value, setValue] = useState('');

  console.log(`type : ${type}`);
  const text = textMap[type];
  return (
    <SetUpFormBlock>
      <h3>{text}를 입력하세요</h3>
      <SetupInsert onSubmit={onSubmit} onChange={onChange} />
      <SetUpList>
        <SetupListItem type={type}></SetupListItem>
      </SetUpList>
    </SetUpFormBlock>
  );
};

export default SetUpForm;
