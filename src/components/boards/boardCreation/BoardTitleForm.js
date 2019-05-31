import React from "react";
import { Field, reduxForm } from "redux-form";
import BoardTitleInput from "./BoardTitleInput";

let BoardTitleForm = props => {
  const { handleSubmit, cancelAction } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field name="boardTitle" component={BoardTitleInput} type="text" />
      </form>
      <button onClick={() => cancelAction()}>Cancel</button>
      <button onClick={handleSubmit} type="button">
        Create Board
      </button>
    </div>
  );
};

function validate(values) {
  let errors = {};

  if (!values.boardTitle || values.boardTitle === "") {
    errors.boardTitle = "Oops! Looks like you forgot the name!";
  }

  return errors;
}

BoardTitleForm = reduxForm({
  validate,
  form: "boardTitle"
})(BoardTitleForm);

export default BoardTitleForm;
