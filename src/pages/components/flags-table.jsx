import React from "react";

const FlagsTable = props => {
  const { data } = props;
  const flagRows = data.map((item, index) => (
    <tr key={index}>
      <td>
        <code>{item.short}</code>
      </td>
      <td>
        <code>{item.long}</code>
      </td>
    </tr>
  ));

  return (
    <table className="attr-table">
      <thead>
        <tr>
          <th>Flags</th>
        </tr>
        <tr>
          <th>Short</th>
          <th>Long</th>
        </tr>
      </thead>
      <tbody>{flagRows}</tbody>
    </table>
  );
};

export default FlagsTable;
