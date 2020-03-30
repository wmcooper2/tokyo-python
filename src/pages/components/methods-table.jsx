import React from "react";

const MethodTable = props => {
  //props is a method table data structure
  //see re-data.js as an example
  const { data } = props;
  const rows = data.map((item, index) => (
    <tr key={index}>
      <td>
        <code>{item["basic-use"]}</code>
      </td>
      <td>
        <code>{item["full-use"]}</code>
      </td>
    </tr>
  ));

  let table = (
    <table className="re method-table">
      <thead>
        <tr>
          <th>Methods</th>
        </tr>
        <tr>
          <th>Required</th>
          <th>Optional</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
  return table;
};

export default MethodTable;
