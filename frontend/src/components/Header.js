import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">collection.track</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/book/readlist">Read List</Link>
            </li>

            <li>
              <Link to="/book/completed">Completed Books</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
