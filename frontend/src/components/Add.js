import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    //store key in env variable
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=${apiKey}&maxResults=40`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.items);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Type here to search..."
              value={query}
              onChange={onChange}
            />
          </div>

          {results ? results.length > 0 && (
            <ul className="results">
              {results.map((book) => (
                <li key={book.id}>
                  <ResultCard book={book} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};
