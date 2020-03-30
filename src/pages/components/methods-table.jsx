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
    <table className="re args-table">
      <thead>
        <tr>
          <th>
            <td>Required</td>
          </th>
          <th>
            <td>Optional</td>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
  return table;
};

const MethodTable2 = props => {
    const {data} = props;
  const rows = data.map((item, index) => (
    <table key={index} className="args-table">
      <thead>
        <tr>
          <th>{item.method}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>{item["basic-use"]}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>{item["full-use"]}</code>
          </td>
        </tr>
      </tbody>
    </table>
  ));

  return rows;
};

export default MethodTable;
