import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ItemControls = ({ type, book }) => {
  const {
    removeItemFromReadlist,
    addItemToCompleted,
    moveToReadlist,
    removeFromCompleted,
    removeItemFromBorrowed,
    removeItemFromLent,
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

      {type === "borrowed" && (
        <>
          <h1 classname="ctrl-btn" style={{color:"white", fontSize:"medium"}}>From Modi</h1>
          <button
            className="ctrl-btn"
            onClick={() => removeItemFromBorrowed(book.id)}
            style={{marginLeft:"20px"}}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "lent" && (
        <>
         
          <h1 style={{color:"white", fontSize:"medium"}}>To Modi</h1>
          <button
            className="ctrl-btn"
            onClick={() => removeItemFromLent(book.id)}
            style={{marginLeft:"20px"}}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
