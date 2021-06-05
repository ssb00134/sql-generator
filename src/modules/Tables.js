import { createAction, handleActions } from 'redux-actions';

//액션 타입 정의
const INSERT = 'table/INSERT';
const CHANGE_INPUT = 'table/CHANGE_INPUT';
const REMOVE = 'table/REMOVE';

let id = 3;

const initialState = {
  input: '',
  tables: [
    { id: 1, table: 'EISHS.IIS_MST_M', alias: String.fromCharCode([65]) },
    { id: 2, table: 'EISHS.IIS_MST_M', alias: String.fromCharCode([66]) },
  ],
};
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

export const insert = createAction(INSERT, (table) => ({
  id: id++,
  table,
}));

export const remove = createAction(REMOVE, (id) => id);

const tables = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: action }) => ({
      ...state,
      input: action,
    }),
    [INSERT]: (state, { payload: table }) => ({
      ...state,
      tables: state.tables.concat(table),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      tables: state.tables.filter((table) => table.id !== id),
    }),
  },
  initialState,
);

export default tables;
