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
            <Link to="/">collection.track</Link>
          </div>
          {/* <div> */}
            <Link to="/book/borrowed">Borrowed Books</Link>
            <Link to="/book/lent">Lent Books</Link>
            <Link to="/book/readlist">Read List</Link>
            <Link to="/book/completed">Completed Books</Link>
            <button className="btn btn-main" style={{padding:"0px", margin:"10px"}}>
              <Link to="/add" style={{padding:"10px 16px"}}>+ Add</Link>
            </button>
          <button class="icon" onClick={funcResponsive} style={{padding: "14px 16px", color:"white", backgroundColor:"black", border:"0", fontSize:"large"}}>
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
