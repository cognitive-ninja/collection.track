import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ItemCard } from "./ItemCard";

export const Lent = () => {
  const { lent } = useContext(GlobalContext);

  return (
    <div className="item-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Lent books</h1>

          <span className="count-pill">
            {lent.length} {lent.length === 1 ? "Book" : "Books"}
          </span>
        </div>

        {lent.length > 0 ? (
          <div className="item-grid">
            {lent.map((book) => (
              <ItemCard book={book} key={book.id} type="lent" />
            ))}
          </div>
        ) : (
          <h2 className="no-books">No books in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
