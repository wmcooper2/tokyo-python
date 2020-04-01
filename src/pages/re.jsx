import React from "react";
import { reFlags, reMethods } from "./data/re-data";
import MethodTable from "./components/methods-table";
import FlagsTable from "./components/flags-table";

const RePage = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">Re Page</h1>
      <p>
        Quick reference for the <code>re</code> module.
      </p>
      <FlagsTable data={reFlags} />
      <MethodTable data={reMethods} />
    </div>
  );
};

export default RePage;
