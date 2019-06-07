import React from "react";
import styled from "styled-components";

const inputWrapper = styled.input`
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 3px;
  display: block;
`;

const BoardTitleInput = field => {
  return (
    <label>
      <input
        {...field.input}
        placeholder="Add board title"
        type="text"
        className="subtle-input"
      />
      {field.meta.touched && field.meta.error && (
        <p className="error">{field.meta.error}</p>
      )}
    </label>
  );
};

export default BoardTitleInput;
