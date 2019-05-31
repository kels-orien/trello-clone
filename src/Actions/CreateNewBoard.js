import React from "react";
import { CREATE_NEW_BOARD } from "./ActionTypes";

export default function CreateNewBoard() {
  return {
    type: CREATE_NEW_BOARD,
    payload: true
  };
}
