import React from 'react';
import SetUpForm from '../components/setup/SetUpForm';

const onSubmit = (e) => {
  e.preventDefault();
};

const onChange = (e) => {
  const { value, name } = e.target;
};

function ConditionForm() {
  return (
    <SetUpForm
      type="condition"
      onSubmit={onSubmit}
      onchange={onChange}
    ></SetUpForm>
  );
}

export default ConditionForm;
