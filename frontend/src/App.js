import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Readlist } from "./components/Readlist";
import { Completed } from "./components/Completed";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import { Borrowed } from "./components/Borrowed";
import { Lent } from "./components/Lent";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/book/readlist">
            <Readlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/book/completed">
            <Completed />
          </Route>
          <Route path="/book/borrowed">
            <Borrowed />
          </Route>
          <Route path="/book/lent">
            <Lent />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
