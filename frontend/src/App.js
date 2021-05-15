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

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/collection.track">
            <Home />
          </Route>
          <Route exact path="/collection.track/book/readlist">
            <Readlist />
          </Route>
          <Route path="/collection.track/add">
            <Add />
          </Route>
          <Route path="/collection.track/book/completed">
            <Completed />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
