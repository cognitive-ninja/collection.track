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
  borrowed: localStorage.getItem("borrowed")
    ? JSON.parse(localStorage.getItem("borrowed"))
    : [],
  lent: localStorage.getItem("lent")
    ? JSON.parse(localStorage.getItem("lent"))
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
    localStorage.setItem("borrowed", JSON.stringify(state.borrowed));
    localStorage.setItem("lent", JSON.stringify(state.lent));
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

  const removeFromCompleted = (id) => {
    dispatch({ type: "REMOVE_FROM_COMPLETED", payload: id });
  };
  
  const moveToReadlist = (book) => {
    dispatch({ type: "MOVE_TO_READLIST", payload: book });
  };

  const addItemToBorrowed = (book) => {
    dispatch({ type: "ADD_ITEM_TO_BORROWED", payload: book });
  };

  const removeItemFromBorrowed = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_BORROWED", payload: id });
  };

  const addItemToLent = (book) => {
    dispatch({ type: "ADD_ITEM_TO_LENT", payload: book });
  };

  const removeItemFromLent = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_LENT", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        readlist: state.readlist,
        completed: state.completed,
        borrowed: state.borrowed,
        lent: state.lent,
        addItemToReadlist,
        removeItemFromReadlist,
        addItemToCompleted,
        removeFromCompleted,
        moveToReadlist,
        addItemToBorrowed,
        removeItemFromBorrowed,
        addItemToLent,
        removeItemFromLent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
