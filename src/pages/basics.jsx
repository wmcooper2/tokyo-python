import React from "react";
import { basicConcepts, basicCharacters } from "./data/basics-data";
import ParagraphsTable from "./components/paragraphs-table";
import CodeDescriptionTable from "./components/description-table";

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
      <h2>Special Characters</h2>
      <p>
        In addition to the special sequences under the "sequences" subtopic,
        here are the special character combinations that help make regular
        expressions so interesting, powerful and simple or complicated
        (depending on how you look at it). I've changed the order a little to
        group the ones I feel are more similar to try and make it easier to see
        the similarites and differences. I added an ellipse to the square
        brackets to be more consistent with how the others are displayed.
      </p>
      <CodeDescriptionTable data={basicCharacters} />
    </div>
  );
};

export default BasicsPage;
