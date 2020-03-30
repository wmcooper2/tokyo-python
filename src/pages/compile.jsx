import React from "react";
import ArgsTable from "./components/args-table";
import compileMethod from "./data/compile-data";

const ExampleTable = props => {
  const { index, value } = props;
  return (
    <table className="method-table">
      <thead>
        <tr>
          <th>Ex {index}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cell-label">Regex:</td>
          <td>
            <code className="regex-code">{value.reg}</code>
          </td>
        </tr>
        <tr>
          <td className="cell-label">Result:</td>
          <td>
            <code className="regex-result">{value.result}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Examples = () => {
  const examples = [];
  for (let [key, value] of Object.entries(compileMethod.examples)) {
    examples.push(<ExampleTable key={key} index={key} value={value} />);
  }
  return examples;
};

const TextPatternTable = props => {
  // console.log("TPT: ", props);
  return (
    <table className="text-pattern-table">
      <thead>
        <tr>
          <th className="cell-label">Text</th>
          <th className="cell-label">Pattern</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code className="regex-text">{props.text}</code>
          </td>
          <td>
            <code className="regex-pattern">{props.pattern}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const CompilePage = () => {
  return (
    <div className="topic-page">
      <h1>Compile Page</h1>
      <p>{compileMethod.description}</p>
      <ArgsTable {...compileMethod} />
      <TextPatternTable
        text={compileMethod.text}
        pattern={compileMethod.pattern}
      />
      <Examples />
    </div>
  );
};

export default CompilePage;
