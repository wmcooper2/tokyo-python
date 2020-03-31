import React from "react";
import TopicContent from "./nav-bar-components/topic-nav-bar";
import mainData from "./SiteMainData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";

const Header = () => {
  //navigation bar header
  let navLinks = [];
  for (let [key, value] of Object.entries(mainData)) {
    navLinks.push(
      <ol key={key}>
        <Link to={`/${value.path}`}>{value["nav-link"]}</Link>
      </ol>
    );
  }
  return (
    <header>
      <nav>{navLinks}</nav>
    </header>
  );
};

const App = () => {
  let routes = [];
  for (let key of Object.keys(mainData)) {
    routes.push(
      <Route key={key} path={`/${mainData[key].path}`}>
        <TopicContent {...mainData[key]} />
      </Route>
    );
  }

  //add the default path "/" for the home page
  routes.push(
    <Route key="home" path="/">
      <TopicContent {...mainData["home"]} />
    </Route>
  );

  //main topic routes for header nav bar
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>{routes}</Switch>
      </div>
    </Router>
  );
};

export default App;
