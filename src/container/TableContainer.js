import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import TableComponent from '../components/table/TableComponent';
import { changeInput, insert, remove } from '../modules/Tables';

const onChange = (e) => {
  const { value, name } = e.target;
};

function TableContainer() {
  const { input, tables } = useSelector(({ tables }) => ({
    input: tables.input,
    tables: tables.tables,
  }));

  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    (input) => dispatch(changeInput(input)),
    [dispatch],
  );
  const onInsert = useCallback((table) => dispatch(insert(table)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id), [dispatch]));

  return (
    <TableComponent
      input={input}
      tables={tables}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onRemove={onRemove}
    />
  );
}
export default React.memo(TableContainer);
