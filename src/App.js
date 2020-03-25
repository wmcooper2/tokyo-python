import React from "react";
import TopicContent from "./components/topiccontent";
import pageData from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";

const Logo = () => {
  return <img id="logo" src="placeholder.jpeg" alt="Logo"></img>;
};

const Header = () => {
  //navigation bar header
  return (
    <header>
      <nav>
        <Logo />
        <ol>
          <Link to="/">Home</Link>
        </ol>
        <ol>
          <Link to="/meetup">Meetup</Link>
        </ol>
        <ol>
          <Link to="/regex">Regexes</Link>
        </ol>
        <ol>
          <Link to="/javascript">Javascript</Link>
        </ol>
      </nav>
    </header>
  );
};

const App = () => {
  const { home, meetup, javascript, regex } = pageData;
  return (
    <Router>
      <div className="App" id="border">
        <Header />
        <Switch>
          <Route path="/javascript">
            <TopicContent {...javascript} />
          </Route>
          <Route path="/regex">
            <TopicContent {...regex} />
          </Route>
          <Route path="/meetup">
            <TopicContent {...meetup} />
          </Route>
          <Route path="/">
            <TopicContent {...home} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
