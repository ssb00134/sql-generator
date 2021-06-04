import React from 'react';
import SetUpForm from '../components/setup/SetUpForm';
import { changeInput, insert, remove } from '../modules/Columns';
import { connect } from 'react-redux';

const onChange = (e) => {
  const { value, name } = e.target;
};

function ColumnForm({ input, columns, changeInput, insert, remove }) {
  return (
    <SetUpForm
      type="column"
      input={input}
      columns={columns}
      onChangeInput={changeInput}
      onInsert={insert}
      onRemove={remove}
      onChange={onChange}
    ></SetUpForm>
  );
}

export default connect(
  ({ columns }) => ({
    input: columns.input,
    columns: columns.columns,
  }),
  {
    changeInput,
    insert,
    remove,
  },
)(ColumnForm);
