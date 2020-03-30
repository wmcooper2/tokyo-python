import React from "react";

const ParagraphsTable = props => {
  const data = Object.entries(props);
  let examples = [];
  data.forEach(item => {
    const exampleIndex = item[0];
    const example = item[1];
    examples.push(
      <table key={exampleIndex} className="method-table">
        <thead>
          <tr>
            <th>Ex {exampleIndex}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cell-label">Text:</td>
            <td>
              <code className="regex-text">{example.text}</code>
            </td>
          </tr>
          <tr>
            <td className="cell-label">Pattern:</td>
            <td>
              <code className="regex-pattern">{example.pattern}</code>
            </td>
          </tr>
          <tr>
            <td className="cell-label">Regex:</td>
            <td>
              <code className="regex-code">{example.reg}</code>
            </td>
          </tr>
          <tr>
            <td className="cell-label">Result:</td>
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

export default ParagraphsTable;
