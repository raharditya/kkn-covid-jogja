import React, { useState } from "react";
import "./style.scss";
import Home from "./components/layout/Home";
import News from "./components/layout/News";
import Info from "./components/layout/Info";
import AppNav from "./components/AppNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Hoax from "./components/layout/Hoax";
import Medsos from "./components/layout/Medsos";
import Article from "./components/layout/Article";

import articles from "./articles/testArticle";

function App() {
  const [navShow, setNavShow] = useState(true);

  function setNav(arg) {
    setNavShow(arg);
  }

  const articleRoutes = articles.map((article) => {
    return (
      <Route path={article.url} exact>
        <Article
          setNav={setNav}
          title={article.title}
          img={article.img}
          content={article.content}
        />
      </Route>
    );
  });

  return (
    <Router>
      <AppNav navShow={navShow} />
      <Route path="/" exact>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={800}
            unmountOnExit
            classNames="page"
          >
            <Home setNav={setNav} />
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
            <News setNav={setNav} />
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
            <Info setNav={setNav} />
          </CSSTransition>
        )}
      </Route>

      <Route path="/hoax" exact>
        <Hoax setNav={setNav} />
      </Route>

      <Route path="/medsos" exact>
        <Medsos setNav={setNav} />
      </Route>

      {articleRoutes}
    </Router>
  );
}

export default App;
