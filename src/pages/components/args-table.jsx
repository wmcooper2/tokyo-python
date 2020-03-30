import React from "react";

const ArgsTable = props => {
  return (
    <table className="args-table">
      <thead>
        <tr>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Required</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td className="basic-use">
            <code className="">{props["basic-use"]}</code>
          </td>
          <td className="full-use">
            <code className="">{props["full-use"]}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ArgsTable;
