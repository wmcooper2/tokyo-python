import React from "react";
import {
  Switch,
  Route,
  Link,
  // useParams,
  useRouteMatch
} from "react-router-dom";

const TopicRoute = props => {
  // const { name } = useParams();
  // console.log("TopicRoute.name: ", name);
  // const { subnav } = props;
  const { topics, topicName } = props;
  let match = useRouteMatch();
  console.log("TopicRoute.props: ", topics);
  console.log("TopicName.props: ", topicName);
  console.log("Topic Route: ", `${match.path}${topicName}`);
  return (
    <Route path={`${match.path}${topicName}`}>
      {/* <Route path={`${match.path}`} component={}> */}
      {/* default path */}
      {/* <TopicPage content={content} /> */}
      {/* <div>{subnav.topics[name]}</div> */}
      <div>{topics[topicName]}</div>
      {/* topic value (in key, value property) is the object thats rendered here. */}
    </Route>
  );
  // <div>{props.content}</div>;
};

const TopicsNav = props => {
  let match = useRouteMatch();
  console.log("TopicsNav.props: ", props);
  const { subnav } = props;
  let topics = []; //topic is the link to the topic page content
  let topicRoutes = [];
  for (let [key, value] of Object.entries(subnav.topics)) {
    //key is the topic link, value is the topic page content
    // console.log(key, value);
    topics.push(
      <Link key={key} to={`${match.url}${key}`}>
        {value}
      </Link>
    );
    topicRoutes.push(
      <TopicRoute key={key} topics={subnav} topicName={key}></TopicRoute>
    );
    // console.log("topics: ", topics);
    // console.log("topic routes: ", topicRoutes);
  }

  // console.log("subnav fullpath: ", `${match.path}/${path}`);
  // console.log("subnav fullpath: ", `${match.path}`);

  return (
    <React.Fragment>
      <div className="subnav">{topics}</div>
      <Switch>{topicRoutes}</Switch>
    </React.Fragment>
  );
};

export default TopicsNav;
