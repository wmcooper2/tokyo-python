import React from "react";

const ExampleTable = props => {
  const { index, value } = props;
  return (
    <table className="example-table">
      <thead>
        <tr>
          <th>Ex {index}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cell-label">This:</td>
          <td>
            <code className="regex-code">{value.reg}</code>
          </td>
        </tr>
        <tr>
          <td className="cell-label">Or this:</td>
          <td>
            <code className="regex-result">{value.result}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExampleTable;
