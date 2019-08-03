import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from './pages/Home';
import DIY from './pages/DIY';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/DIY" component={DIY} />
      </Switch>
    </React.Fragment>
  </Router>
  );
};

export default App;
