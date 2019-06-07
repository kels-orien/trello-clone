import React, { Component } from "react";
import { connect } from "react-redux";
import cancelCreatingBoard from "./../../../Actions/CancelCreatingBoard";
import submitNewBoard from "./../../../Actions/CancelCreatingBoard";
import BoardTitleForm from "./BoardTitleForm";
import Modals from "./Modal";

class CreateCurrentBoard extends Component {
  submit = values => {
    this.props.submitNewBoard(values.boardTitle);
    values.boardTitle = "";
  };
  render() {
    const { cancelCreatingBoard } = this.props;
    return (
      <Modals>
        <BoardTitleForm
          onSubmit={this.submit}
          cancelAction={cancelCreatingBoard}
        />
      </Modals>
    );
  }
}

export default connect(
  null,
  { cancelCreatingBoard, submitNewBoard }
)(CreateCurrentBoard);
