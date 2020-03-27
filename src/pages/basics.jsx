import React from "react";
import regexObjects from "./basicsdata";

const RegexObject = props => {
  const data = Object.entries(props);
  let examples = [];
  data.forEach(item => {
    const exampleIndex = item[0];
    const example = item[1];
    examples.push(
      <table key={exampleIndex} className="method-example">
        <thead>
          <tr>
            <th>Ex {exampleIndex}</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    );
  });
  return examples;
};

const ArgsTable = props => {
  return (
    <table className="args-table">
      <thead>
        <tr>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Required</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td className="basic-use">
            <code className="">{props["basic-use"]}</code>
          </td>
          <td className="full-use">
            <code className="">{props["full-use"]}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Concepts = () => {
  const methods = Object.entries(regexObjects);
  let results = [];
  methods.forEach(method => {
    const methodName = method[0];
    const details = method[1];
    results.push(
      <React.Fragment>
        {/* <div key={methodName} className="method-block"> */}
        <a href={details.documentation} className="documentation-link">
          <h2>{methodName}</h2>
        </a>
        {/* <div className="method-contents"> */}
        <p className="method-description">{details.description}</p>
        {details.args ? <ArgsTable {...details} /> : null}
        <RegexObject {...details.examples} />
        {/* </div> */}
        {/* </div> */}
      </React.Fragment>
    );
  });
  return results;
};

const BasicsPage = () => {
  return (
    <div className="topic-page">
      <h1>Basics Page</h1>
      <Concepts className="concept-block" />
    </div>
  );
};

export default BasicsPage;
