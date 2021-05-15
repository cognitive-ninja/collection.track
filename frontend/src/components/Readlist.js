import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ItemCard } from "./ItemCard";

export const Readlist = () => {
  const { readlist } = useContext(GlobalContext);

  return (
    <div className="item-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My readlist</h1>

          <span className="count-pill">
            {readlist.length} {readlist.length === 1 ? "Book" : "Books"}
          </span>
        </div>

        {readlist.length > 0 ? (
          <div className="item-grid">
            {readlist.map((book) => (
              <ItemCard book={book} key={book.id} type="readlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-books">No books in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
