import React from "react";

const AtrributesTable = props => {
  //props is an attribute data structure
  // Example
  // {
  // name: "pattern",
  // usage: "pattern.pattern",
  // description:
  //   "The pattern string from which the pattern object was compiled.",
  // "return-value": null,
  // examples: {
  //   1: {},
  //   2: {},
  //   3: {}
  // }

  const { data } = props;
  const rows = data.map((item, index) => (
    <tr key={index}>
      <td width="200px">
        <code>{item.usage}</code>
      </td>
      <td>{item.description}</td>
    </tr>
  ));

  let table = (
    <table className="re attr-table">
      <thead>
        <tr>
          <th>Attributes</th>
          <th>Return Values</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
  return table;
};

export default AtrributesTable;
