import React from "react";
import { Router, Route } from "react-router-dom";
import history from './history';

// Pages
import Map from 'src/pages/map/Map';
import Home from "./pages/home/Home";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/map" component={Map} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
