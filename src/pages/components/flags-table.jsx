import React from "react";

const FlagsTable = props => {
  const { data } = props;
  const flagRows = data.map((item, index) => (
    <tr key={index}>
      <td>
        <code className="attr-short">{item.short}</code>
      </td>
      <td>
        <code className="attr-long">{item.long}</code>
      </td>
    </tr>
  ));

  return (
    <table className="attr-table">
      <thead>
        <tr>
          <th>Flags</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Short</td>
          <td>Long</td>
        </tr>
        {flagRows}
      </tbody>
    </table>
  );
};
export default FlagsTable;
