import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  function funcResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <header>
      <div className="container">
        <div class="topnav" id="myTopnav">
          <div className="brand">
            <Link to="/collection.track/">collection.track</Link>
          </div>
          {/* <div> */}
            <a href="/collection.track/book/borrowed">Borrowed Books</a>
            <a href="/collection.track/book/lent">Lent Books</a>
            <a href="/collection.track/book/readlist">Read List</a>
            <a href="/collection.track/book/completed">Completed Books</a>
            <button className="btn btn-main" style={{padding:"0px", margin:"10px"}}>
              <a href="/collection.track/add" style={{padding:"10px 16px"}}>+ Add</a>
            </button>
          <button class="icon" onClick={funcResponsive} style={{padding: "14px 16px", color:"white", backgroundColor:"black", border:"0", fontSize:"large"}}>
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
