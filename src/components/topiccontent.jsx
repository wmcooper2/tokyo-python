import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const TopicContent = props => {
  let match = useRouteMatch();
  const { topics, index } = props;
  let topicLinks = [];
  let topicRoutes = [];
  for (let [route, topic] of Object.entries(topics)) {
    // base url adds extra slash... be careful
    let path = match.url === "/" ? `/${route}` : `${match.url}/${route}`;
    topicLinks.push(
      <Link key={route} to={path}>
        <li>{topic.icon}<span>{topic.name}</span></li>
      </Link>
    );
    topicRoutes.push(
      <Route key={route} path={path}>
        {/* topic.content can be an actual component */}
        <div className="content-area">{topic.content}</div>
      </Route>
    );
  }

  //after looping, last one is index page for main topic
  topicRoutes.push(
    <Route key="index" path={match.url}>
      <div className="content-area">{index}</div>
    </Route>
  );

  return (
    <div className="full-topic-area">
      <div className="topics-list">
        <ul>{topicLinks}</ul>
      </div>
      <Switch>{topicRoutes}</Switch>
    </div>
  );
};

export default TopicContent;
