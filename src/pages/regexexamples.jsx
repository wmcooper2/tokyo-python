import React from "react";
import explanations from "./regexamples";

const Examples = props => {
  const data = Object.entries(props);
  let examples = [];
  data.forEach(item => {
    const exampleIndex = item[0];
    const example = item[1];
    examples.push(
      <table className="method-example">
        <tr>
          <th>Example {exampleIndex}</th>
        </tr>
        <tr>
          <td>Text:</td>
          <td>
            <code className="regex-text">{example.text}</code>
          </td>
        </tr>
        <tr>
          <td>Pattern:</td>
          <td>
            <code className="regex-pattern">{example.pattern}</code>
          </td>
        </tr>
        <tr>
          <td>Regex:</td>
          <td>
            <code className="regex-code">{example.reg}</code>
          </td>
        </tr>
        <tr>
          <td>Result:</td>
          <td>
            <code className="regex-result">{example.result}</code>
          </td>
        </tr>
      </table>
    );
  });
  return examples;
};

const Methods = () => {
  const methods = Object.entries(explanations);
  // console.log(methods);
  let results = [];
  methods.forEach(method => {
    const methodName = method[0];
    const details = method[1];
    results.push(
      <div key={methodName} className="method-block">
        <a href={details.documentation} className="documentation-link">
          <h2>{methodName}</h2>
        </a>
        <div className="method-contents">
          <p className="method-description">{details.description}</p>
          <table className="method-args">
            <tr>
              <th>args</th>
            </tr>
            <tr>
              <td>Required</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td className="basic-use">
                <code className="">{details["basic-use"]}</code>
              </td>
              <td className="full-use">
                <code className="">{details["full-use"]}</code>
              </td>
            </tr>
          </table>
          <Examples {...details.examples} />
        </div>
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
