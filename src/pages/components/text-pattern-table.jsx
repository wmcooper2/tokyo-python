import React from "react";

const TextPatternTable = props => {
  return (
    <table className="text-pattern-table">
      <thead>
        <tr>
          <th>Inputs</th>
        </tr>
        <tr>
          <th className="cell-label">Text</th>
          <th className="cell-label">Regex</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code className="regex-text">{props.text}</code>
          </td>
          <td>
            <code className="regex-pattern">{props.regex}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TextPatternTable;
