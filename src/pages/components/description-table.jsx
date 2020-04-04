import React from "react";

const CodeDescriptionTable = props => {
  console.log("Description: ", props);
  const { data } = props;
  const rows = data.map((item, index) => (
    <tr key={index}>
      <td>
        <code>{item.character}</code>
      </td>
    </tr>
  ));

  let table = (
    <table>
      <thead>
        <tr>
          <td>header</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
  return table;
};

export default CodeDescriptionTable;
