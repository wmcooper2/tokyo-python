import React from "react";
import basicConcepts from "./data/basics-data";
import ParagraphsTable from "./components/paragraphs-table";

const BasicConcepts = props => {
  const methods = Object.entries(props);
  let results = [];
  methods.forEach(method => {
    const methodName = method[0];
    const details = method[1];
    results.push(
      <div className="concept-block" key={methodName}>
        <a href={details.documentation} className="documentation-link">
          <h2>{methodName}</h2>
        </a>
        {details.description}
        <ParagraphsTable {...details.examples} />
      </div>
    );
  });
  return results;
};

const BasicsPage = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">Basic Concepts</h1>
      <BasicConcepts {...basicConcepts} />
    </div>
  );
};

export default BasicsPage;
