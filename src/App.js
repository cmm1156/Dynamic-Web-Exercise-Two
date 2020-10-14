import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Styling
// import "./App.css";
import "./App2.css";

// Containers
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap');
    </style>
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
