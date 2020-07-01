import React from "react";
import "./style.scss";
import Home from "./components/layout/Home";
import News from "./components/layout/News";
import Info from "./components/layout/Info";
import AppNav from "./components/AppNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Hoax from "./components/layout/Hoax";
import Medsos from "./components/layout/Medsos";

function App() {
  return (
    <Router>
      <AppNav />
      <Route path="/" exact>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={800}
            unmountOnExit
            classNames="page"
          >
            <Home />
          </CSSTransition>
        )}
      </Route>
      <Route path="/berita" exact>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={800}
            unmountOnExit
            classNames="page"
          >
            <News />
          </CSSTransition>
        )}
      </Route>
      <Route path="/edukasi" exact>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={800}
            unmountOnExit
            classNames="page"
          >
            <Info />
          </CSSTransition>
        )}
      </Route>

      <Route path="/hoax" exact>
        <Hoax />
      </Route>

      <Route path="/medsos" exact>
        <Medsos />
      </Route>
    </Router>
  );
}

export default App;
