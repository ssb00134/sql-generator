import React from 'react'
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'
import styled from 'styled-components'

const StyledSepupListItem = styled.div`
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
`
const StyledRemove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }

`
const StyledCheckbox = styled.div`
    cursor: pointer;
    align-items: center; // 세로 중앙 정렬
    svg {
      // 아이콘
      font-size: 1.5rem;
    }
`


const StyledText = styled.input` 
      margin-left: 0.5rem;
      flex: 1; // 차지할 수 있는 영역 모두 차지
`
const textMap = {
    column: '컬럼',
    condition: '조건',
  };
function SetupListItem({type,onChange}) {
    const text = textMap[type];
    return (
        <StyledSepupListItem>
            {type=='condition' && <StyledCheckbox><MdCheckBoxOutlineBlank/></StyledCheckbox> }
           
            <StyledText placeholder={text}/>
            <StyledRemove><MdRemoveCircleOutline/></StyledRemove>
        </StyledSepupListItem>
    )
}

export default SetupListItem
