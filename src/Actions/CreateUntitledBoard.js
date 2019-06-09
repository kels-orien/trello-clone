import { SUBMIT_NEW_BOARD, CREATE_UNTITLED_BOARD, STORE_NEW_BOARD_TO_COLLECTION } from "./ActionTypes";
import {UNTITLED_BOARD_TITLE} from "./"
import Store from "./../Store";


export default function submitNewBoard(title) {
  return dispatch => {
    dispatch({ type: SUBMIT_NEW_BOARD, payload: title });

    const newBoard = {
      id: Store.getState().newBoard.id,
      title: Store.getState().newBoard.title
    };

    dispatch({ type: STORE_NEW_BOARD_TO_COLLECTION, payload: newBoard });
  };
}


export default function createUntitledBoard() {
    return dispatch => {
        dispatch({ type: CREATE_UNTITLED_BOARD, payload: UNTITLED_BOARD_TITLE });

        const newUntitledBoard = {
            id: Store.getState().newUntitledBoard.id,
            title: Store.getState().newUntitledBoard.title
        }
      };

      

      dispatch({ type: STORE_NEW_BOARD_TO_COLLECTION, payload: newUntitledBoard  });
}
