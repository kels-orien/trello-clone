import React, { Component } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: transparent;
  border: none;
  margin-top: 24px;
  padding: 24px;
  width: auto;

  &.window {
    align-items: flex-start;
    height: 100%;
    justify-content: center;
    left: 0;
    overflow-y: auto;
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

const customStyles = {
  content: {
    backgroundColor: "transparent",
    border: "none",
    marginTop: "24px",
    padding: "24px",
    width: "auto"
  }
};
class Modals extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <Overlay className="window">{this.props.children}</Overlay>
        </Modal>
      </div>
    );
  }
}

export default Modals;
