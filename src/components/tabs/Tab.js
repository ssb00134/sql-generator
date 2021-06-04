import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import FlexDiv from '../common/FlexDiv';
import Select from '../syntax/Select';

const TabItems = [
  {
    title: 'all',
    content: <button>"im content 1"</button>,
  },
  {
    title: 'SELECT',
    content: <Select />,
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

const StyledTabButton = styled.button`
  flex: 1;
`;


export default function Tab({ props }) {
  console.log(` tab color : ${props}`);
  const { currentItem, changeItem } = useTab(0, TabItems);

  console.log(`currentItem.content : ${currentItem.content}`);
  return (
    <div>
      <FlexDiv>
        {TabItems.map((e, index) => (
          <StyledTabButton key={index} onClick={(e) => changeItem(index)}>
            {e.title}
          </StyledTabButton>
        ))}
      </FlexDiv>
      <StyledTabContent>{currentItem.content}</StyledTabContent>
    </div>
  );
}
