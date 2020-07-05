import React from "react";
import "./App.css";
import search from "./component/search";
import orderParts from "./component/orderParts";
import login from "./component/login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={search} />
        <Route exact path="/login" component={login} />
        <Route exact path="/orderParts" component={orderParts} />
      </Switch>
    </Router>
  );
}

export default App;
