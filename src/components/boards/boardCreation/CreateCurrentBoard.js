import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import cancelCreatingBoard from "./../../../Actions/CancelCreatingBoard";
import submitNewBoard from "./../../../Actions/CancelCreatingBoard";
import BoardTitleForm from "./BoardTitleForm";

const Title = styled.h4`
  color: #fff;
`;

class CreateCurrentBoard extends Component {
  submit = values => {
    this.props.submitNewBoard(values.boardTitle);
    values.boardTitle = "";
  };
  render() {
    const { cancelCreatingBoard } = this.props;
    return (
      <div>
        <BoardTitleForm
          onSubmit={this.submit}
          cancelAction={cancelCreatingBoard}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { cancelCreatingBoard, submitNewBoard }
)(CreateCurrentBoard);
