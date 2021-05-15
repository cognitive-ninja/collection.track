import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ItemControls = ({ type, book }) => {
  const {
    removeItemFromReadlist,
    addItemToCompleted,
    moveToReadlist,
    removeFromCompleted,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "readlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addItemToCompleted(book)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeItemFromReadlist(book.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "completed" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToReadlist(book)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromCompleted(book.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
