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
      <Link to={path} key={route}>
        <li className="topic-link">
          <span className="topic-icon">{topic.icon}</span>
          <span className="topic-text">{topic.name}</span>
        </li>
      </Link>
    );
    topicRoutes.push(
      <Route key={route} path={path}>
        {topic.page}
      </Route>
    );
  }

  //after looping, last one is index page for main topic
  topicRoutes.push(
    <Route key="index" path={match.url}>
      {index}
    </Route>
  );

  return (
    <React.Fragment>
      <div className="topics-nav">{topicLinks}</div>
      <Switch>{topicRoutes}</Switch>
    </React.Fragment>
  );
};

export default TopicContent;
