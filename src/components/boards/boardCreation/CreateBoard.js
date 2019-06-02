import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import createNewBoard from "./../../../Actions/CreateNewBoard";

export const Wrapper = styled.ul`
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: inherit;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const Board = styled.li`
  box-sizing: border-box;
  position: relative;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const BoardTileDetails = styled.div`
  display: flex;
  height: 80px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`;

const BoardTileNewBoard = styled.a`
  background-color: rgba(9, 30, 66, 0.08);
  color: #6b778c;
  display: inherit;
  border-radius: 0.2rem;
  line-height: 2rem;
  margin-right: 2rem;
  margin-top: 1rem;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  height: 80px;
  min-width: 11rem;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: 200ms ease-in-out;
    transform: scale(1.1);
  }
`;

export const BoardTileDetailsText = styled.div`
  flex: 0 0 auto;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  overflow: hidden;
  max-height: 40px;
  width: 100%;
  word-wrap: break-word;
`;
const CreateBoard = ({ createNewBoard }) => {
  return (
    <Wrapper onClick={() => createNewBoard()}>
      <Board>
        <BoardTileNewBoard>
          <BoardTileDetails>
            <BoardTileDetailsText>Create new board...</BoardTileDetailsText>
          </BoardTileDetails>
        </BoardTileNewBoard>
      </Board>
    </Wrapper>
  );
};

CreateBoard.propTypes = {
  createNewBoard: PropTypes.func.isRequired
};

export default connect(
  null,
  { createNewBoard }
)(CreateBoard);
