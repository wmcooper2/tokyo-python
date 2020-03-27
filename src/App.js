import React from "react";
import TopicContent from "./components/topiccontent";
import pageData from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";

// const Logo = () => {
// return <img id="logo" src="placeholder.jpeg" alt="Logo"></img>;
// };

const Header = () => {
  //navigation bar header
  let navLinks = [];
  for (let [key, value] of Object.entries(pageData)) {
    navLinks.push(
      <ol key={key}>
        <Link to={`/${value.path}`}>{value["nav-link"]}</Link>
      </ol>
    );
  }
  return (
    <header>
      <nav>
        {/* <Logo /> */}
        {navLinks}
      </nav>
    </header>
  );
};

const App = () => {
  let routes = [];
  for (let key of Object.keys(pageData)) {
    routes.push(
      <Route key={key} path={`/${pageData[key].path}`}>
        <TopicContent {...pageData[key]} />
      </Route>
    );
  }

  //add the default path "/" for the home page
  routes.push(
    <Route key="home" path="/">
      <TopicContent {...pageData["home"]} />
    </Route>
  );

  //main topic routes for header nav bar
  return (
    <Router>
      <div className="App" id="border">
        <Header />
        <Switch>{routes}</Switch>
      </div>
    </Router>
  );
};

export default App;
