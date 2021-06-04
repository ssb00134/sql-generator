import React from 'react';
import SetUpForm from '../components/setup/SetUpForm';
import { changeInput, insert, remove } from '../modules/Columns';
import { connect } from 'react-redux';

const onSubmit = (e) => {
  e.preventDefault();
};

const onChange = (e) => {
  const { value, name } = e.target;
};

function ConditionForm({ input, columns, changeInput, insert, remove }) {
  return (
    <SetUpForm
        type="condition"
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
)(ConditionForm);


