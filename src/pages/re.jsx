import React from "react";
import { reFlags, reMethods } from "./reData";

const flagRows = reFlags.map((item, index) => (
  <tr key={index}>
    <td>
      <code className="attr-short">{item.short}</code>
    </td>
    <td>
      <code className="attr-long">{item.long}</code>
    </td>
  </tr>
));

const methodRows = reMethods.map((item, index) => (
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

const RePage = () => {
  return (
    <div className="topic-page">
      <h1>Re Page</h1>
      <p>This is meant to be summary of the official documentation.</p>
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
      {methodRows}
    </div>
  );
};

export default RePage;
