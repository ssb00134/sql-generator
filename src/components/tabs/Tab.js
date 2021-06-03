import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Select from '../syntax/Select';

const TabItems = [
  {
    title: 'all',
    content: <button>"im content 1"</button>,
  },
  {
    title: 'SELECT',
    content: <Select></Select>,
  },
  {
    title: 'INSERT',
    content: 'INSERT',
  },
  {
    title: 'UPDATE',
    content: 'UPDATE',
  },
  {
    title: 'DELETE',
    content: 'DELETE',
  },
];
const useTab = (idx, Tabs) => {
  const [currentIdx, setCurrentIdx] = useState(idx);
  return {
    currentItem: Tabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};

const StyledTab = styled.div`
  cursor: pointer;
  display: flex;
  display: flex;
  align-items: center; // 세로 중앙 정렬
  svg {
    // 아이콘
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
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
`;
const StyledTabContent = styled.div`
  height: 100vh;
`;

export default function Tab({ props }) {
  console.log(` tab color : ${props}`);
  const { currentItem, changeItem } = useTab(0, TabItems);

  console.log(`currentItem.content : ${currentItem.content}`);
  return (
    <div>
      <StyledTab>
        {TabItems.map((e, index) => (
          <button key={index} onClick={(e) => changeItem(index)}>
            {e.title}
          </button>
        ))}
      </StyledTab>
      <StyledTabContent>{currentItem.content}</StyledTabContent>
    </div>
  );
}
