//

//액션 타입 정의
const CHANGE_INPUT = 'Columns/CHANGE_INPUT';
const INSERT = 'Columns/INSERT';
const REMOVE = 'Columns/REMOVE';

// 액션 생성 함수 생성
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;

export const insert = (text) => ({
  type: INSERT,
  columns: {
    id: id++,
    text,
  },
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

//리듀서 함수 생성
const initialState = {
  input: '',
  table: '',
  columns: [
    { id: 1, text: 'column1', table:  'EISHS.IIS_MST_M'  },
    { id: 2, text: 'column2',  table:  'EISHS.IIS_MST_M' },
  ],
};

function columns(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        columns: state.columns.concat(action.columns),
  
      };
    case REMOVE:
      return {
        ...state,
        columns: state.columns.filter((column) => column.id !== action.id),
      };

    default:
      return state;
  }
}

export default columns;
