import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const MainContent = props => {
  let match = useRouteMatch();
  console.log("match: ", match);
  console.log(props);
  const { topics } = props;

  let topicLinks = [];
  let topicRoutes = [];

  for (let [route, title] of Object.entries(topics)) {
    // console.log(route);
    let path = match.url === "/" ? route : `${match.url}/${route}`;
    topicLinks.push(
      //   <Link key={route} to={`${match.url}/${route}`}>
      <Link key={route} to={path}>
        <ol>{title}</ol>
      </Link>
    );
    topicRoutes.push(

    //   <Route key={route} path={`${match.url}/${route}`}>
      <Route key={route} path={path}>
        <div className="topic-content">{title}</div>
      </Route>
    );
  }

  console.log("topicLinks: ", topicLinks);
  console.log("topicRoutes: ", topicRoutes);

  return (
    <div className="maincontent">
      <div className="subnav">{topicLinks}</div>
      <Switch>{topicRoutes}</Switch>
    </div>
  );
};

export default MainContent;
