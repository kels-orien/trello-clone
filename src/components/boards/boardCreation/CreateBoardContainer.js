import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateBoard from "./CreateBoard";
import CreateCurrentBoard from "./CreateCurrentBoard";

class CreateBoardContainer extends Component {
  render() {
    const { newBoard } = this.props;
    return (
      <div>
        {newBoard.isBoardOpen ? <CreateCurrentBoard /> : <CreateBoard />}
      </div>
    );
  }
}

CreateBoardContainer.propTypes = {
  newBoard: PropTypes.object
};

function mapStateToProps({ newBoard }) {
  return {
    newBoard
  };
}

export default connect(mapStateToProps)(CreateBoardContainer);
