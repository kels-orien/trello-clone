import React from "react";
import { Field, reduxForm } from "redux-form";
import BoardTitleInput from "./BoardTitleInput";
import styled from "styled-components";
import img from "./../../../../src/assets/img/backgroundformcover.jpg";

const CreateFormWrapper = styled.form`
  display: flex;
  background-color: #fff;
  box-sizing: border-box;
  height: 96px;
  border-radius: 3px;
  margin: 0;
  padding: 10px 10px 10px 16px;
  position: relative;
  width: 296px;
  background-size: cover;
  background-position: 50%;
  color: #fff;

  &.create-board-form {
    margin: 0 auto;
    box-sizing: border-box;
    background-image: url(${img});
  }
`;

const Button = styled.button`
  background-color: #5aac44;
  box-shadow: 0 1px 0 0 #3f6f21
  box-shadow: 0 1px 0 0 rgba(9, 30, 66, 0.13);
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  line-height: 20px;
  margin: 8px 4px 0 0;
  padding: 6px 12px;
  text-align: center;
  color:#fff;

  &:hover {
    transition: all 250ms ease-in-out;
    background-color: #519839;
    box-shadow: 0 1px 0 0 #3f6f21;
}

`;

let BoardTitleForm = props => {
  const { handleSubmit, cancelAction } = props;

  return (
    <div>
      <CreateFormWrapper onSubmit={handleSubmit} className="create-board-form">
        <Field name="boardTitle" component={BoardTitleInput} type="text" />
      </CreateFormWrapper>
      <Button onClick={() => cancelAction()}>Cancel</Button>
      <Button onClick={handleSubmit} type="button">
        Create Board
      </Button>
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
