import React, { useContext } from "react";
// import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ book }) => {
  const {
    addItemToReadlist,
    addItemToCompleted,
    addItemToBorrowed,
    addItemToLent,
    readlist,
    completed,
  } = useContext(GlobalContext);

  let storedItem = readlist.find((o) => o.id === book.id);
  let storedItemCompleted = completed.find((o) => o.id === book.id);

  const readlistDisabled = storedItem
    ? true
    : storedItemCompleted
    ? true
    : false;

  const completedDisabled = storedItemCompleted ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {book.volumeInfo.imageLinks ? (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={`${book.volumeInfo.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <div style={{display: 'flex', justifyContent:"space-between"}}>
            <h3 className="title" style={{fontWeight:"bold", fontFamily:"Montserrat"}}>{book.volumeInfo.title}</h3>
            <div class="dropdown">
              <i class="fas fa-ellipsis-v"></i>
              <div class="dropdown-content">
                <button class="btn" onClick={() => addItemToBorrowed(book)}>Borrow</button>
                <button class="btn" onClick={() => addItemToLent(book)}>Lend</button>
              </div>
            </div>
            
          </div>
          <p className="authors" style={{marginTop: "-0.4px",fontSize:"medium",fontWeight:"light", fontFamily:"Montserrat"}}>{book.volumeInfo.authors}</p>
        
        </div>
        
        <div className="controls">
          <button
            className="btn"
            disabled={readlistDisabled}
            onClick={() => addItemToReadlist(book)}
          >
            Add to ReadList
          </button>

          <button
            className="btn"
            disabled={completedDisabled}
            onClick={() => addItemToCompleted(book)}
          >
            Add to Completed
          </button>
        </div>
      </div>
    </div>
  );
};
