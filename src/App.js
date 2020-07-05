import React from "react";
import "./App.css";
import search from "./component/search";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={search} />
      </Switch>
    </Router>
  );
}

export default App;
