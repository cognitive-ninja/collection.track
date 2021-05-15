import React from "react";
import { ItemControls } from "./ItemControls";
import bookbackg from "../default-book.jpg"
export const ItemCard = ({ book, type }) => {
  return (
    <div>
      <div className="item-card">
        <div className="overlay"></div>
          {book.volumeInfo.imageLinks ? <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={`${book.volumeInfo.title} Poster`}
            /> : <img
            src={bookbackg}
            alt={`${book.volumeInfo.title} Poster`}
            />}
        <ItemControls type={type} book={book} />
      </div>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
        <p style={{color:"blue", textAlign:"center", fontFamily:"montserrat", fontStyle:"italic", transition:"all 0.4s ease"}}>{book.volumeInfo.title}</p>
      </a>
    </div>
  );
};
