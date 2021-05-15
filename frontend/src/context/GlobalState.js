import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  readlist: localStorage.getItem("readlist")
    ? JSON.parse(localStorage.getItem("readlist"))
    : [],
  completed: localStorage.getItem("completed")
    ? JSON.parse(localStorage.getItem("completed"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("readlist", JSON.stringify(state.readlist));
    localStorage.setItem("completed", JSON.stringify(state.completed));
  }, [state]);

  // actions
  const addItemToReadlist = (book) => {
    dispatch({ type: "ADD_ITEM_TO_READLIST", payload: book });
  };

  const removeItemFromReadlist = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_READLIST", payload: id });
  };

  const addItemToCompleted = (book) => {
    dispatch({ type: "ADD_ITEM_TO_COMPLETED", payload: book });
  };

  const moveToReadlist = (book) => {
    dispatch({ type: "MOVE_TO_READLIST", payload: book });
  };

  const removeFromCompleted = (id) => {
    dispatch({ type: "REMOVE_FROM_COMPLETED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        readlist: state.readlist,
        completed: state.completed,
        addItemToReadlist,
        removeItemFromReadlist,
        addItemToCompleted,
        moveToReadlist,
        removeFromCompleted,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
