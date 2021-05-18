import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ItemCard } from "./ItemCard";

export const Borrowed = () => {
  const { borrowed } = useContext(GlobalContext);

  return (
    <div className="item-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Borrowed  Books</h1>

          <span className="count-pill">
            {borrowed.length} {borrowed.length === 1 ? "Book" : "Books"}
          </span>
        </div>

        {borrowed.length > 0 ? (
          <div className="item-grid">
            {borrowed.map((book) => (
              <ItemCard book={book} key={book.id} type="borrowed" />
            ))}
          </div>
        ) : (
          <h2 className="no-books">No books in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
