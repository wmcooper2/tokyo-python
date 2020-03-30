import React from "react";
import { reFlags, reMethods } from "./data/re-data";
import MethodTable from "./components/methods-table";
import FlagsTable from "./components/flags-table";

const RePage = () => {
  return (
    <div className="topic-page">
      <h1>Re Page</h1>
      <p>
        This is meant to be summary of the official documentation. Here are the
        flags and methods for the re module.
      </p>
      <FlagsTable data={reFlags} />
      <MethodTable data={reMethods} />
    </div>
  );
};

export default RePage;
