import React from "react";
import MethodsTable from "./components/methods-table";
import AttributesTable from "./components/attributes-table";
import { patternMethods, patternAttributes } from "./data/pattern-data";

const PatternPage = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">Pattern Objects</h1>
      <p>
        The <code>pattern</code> <strong>object's</strong> method names are
        similar to the ones in the <code>re</code> <strong>module</strong>.
        Don't confuse them.
      </p>
      <AttributesTable data={patternAttributes} />
      <MethodsTable data={patternMethods} />
    </div>
  );
};

export default PatternPage;
