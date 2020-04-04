import React from "react";

const CodeDescriptionTable = props => {
  const { data } = props;
  const rows = data.map((item, index) => (
    <React.Fragment key={index}>
      <tr>
        <td>
          <code>{item.character}</code>
        </td>
        <td>{item.description}</td>
      </tr>
    </React.Fragment>
  ));

  let table = (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
  return table;
};

export default CodeDescriptionTable;
