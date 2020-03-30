import React from "react";
import MethodsTable from "./components/methods-table";
import AttributesTable from "./components/attributes-table";
import { patternMethods, patternAttributes } from "./data/pattern-data";

const PatternPage = () => {
  return (
    <div className="topic-page">
      <h1>Pattern Objects</h1>
      <p>
        The 'pattern' object's method names are similar to the ones in the 're'
        module. Don't confuse them.
      </p>
      <AttributesTable data={patternAttributes} />
      <MethodsTable data={patternMethods} />
    </div>
  );
};

export default PatternPage;
