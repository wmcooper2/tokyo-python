import React from "react";
import explanations from "./regexamples";

const Examples = props => {
  console.log(Object.entries(props));
  // const data = [...props];
  const data = Object.entries(props);
  console.log("data: ", data);
  // const { data } = props;
  // let examples = data.forEach(example => <p>{example.text}</p>);

  // return examples;
  return "example";
};

const Methods = () => {
  const methods = Object.entries(explanations);
  // console.log(methods);
  let results = [];
  methods.forEach(method => {
    const methodName = method[0];
    const details = method[1];
    results.push(
      <div key={methodName} className="example">
        <h3>{methodName}</h3>
        <p className="method-description">{details.description}</p>
        <p className="basic-use">{details["basic-use"]}</p>
        <p className="full-use">{details["full-use"]}</p>
        <a href={details.documentation} className="documentation-link">
          Official Docs: {methodName}
        </a>
        <Examples {...details.examples} />
      </div>
    );
  });
  return results;
};

const ExamplesPage = () => {
  return (
    <div className="index-page">
      <h1>Examples Page</h1>
      <Methods />
    </div>
  );
};

export default ExamplesPage;
