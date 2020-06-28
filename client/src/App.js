import React from "react";
import "./style.scss";
import Home from "./components/layout/Home";
import News from "./components/layout/News";
import Info from "./components/layout/Info";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/berita" exact>
        <News />
      </Route>
      <Route path="/edukasi" exact>
        <Info />
      </Route>
    </Router>
  );
}

export default App;
