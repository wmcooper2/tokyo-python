import React from "react";
import MethodsTable from "./components/methods-table";
import AttributesTable from "./components/attributes-table";
import { matchMethods, matchAttributes } from "./data/re-match-data";

const MatchPage = () => {
  return (
    <div className="topic-page">
      <h1>Match Objects</h1>
      <p>
        The <code>match</code> <strong>object</strong> is the result of your
        regular expression searching.
      </p>
      <AttributesTable data={matchAttributes} />
      <MethodsTable data={matchMethods} />
    </div>
  );
};

export default MatchPage;
