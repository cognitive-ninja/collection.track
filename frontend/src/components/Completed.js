import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ItemCard } from "./ItemCard";

export const Completed = () => {
  const { completed } = useContext(GlobalContext);

  return (
    <div className="item-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Completed Books</h1>

          <span className="count-pill">
            {completed.length} {completed.length === 1 ? "Book" : "Books"}
          </span>
        </div>

        {completed.length > 0 ? (
          <div className="item-grid">
            {completed.map((book) => (
              <ItemCard book={book} key={book.id} type="completed" />
            ))}
          </div>
        ) : (
          <h2 className="no-books">No books in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
