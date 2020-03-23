import React from "react";
import Header from "./components/header";
import SubNav from "./components/subnav";
import MainContent from "./components/maincontent";
import pageData from "./data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  const { javascript, regex, home } = pageData;
  return (
    <Router>
      <div className="App" id="border">
        <Header />

        <div className="maincontent">
          <Switch>
            <Route path="/javascript">
              <SubNav {...javascript} />
              <MainContent {...javascript} />
            </Route>
            <Route path="/regexes">
              <SubNav {...regex} />
              <MainContent {...regex} />
            </Route>
            <Route path="/">
              <SubNav {...home} />
              <MainContent {...home} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
