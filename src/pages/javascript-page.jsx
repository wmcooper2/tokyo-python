import React from "react";
import Comparison from "./components/comparison";
import python3Data from "./data/python3-data";
import javascriptData from "./data/javascript-data";

const JavascriptPage = () => {
  return (
    <div className="javascript topic-page">
      <h1 className="left-align">Python and JavaScript</h1>
      {/* <Comparison title="variables" left={python3Data} right={javascriptData} /> */}
      <Comparison
        title="variables"
        leftTitle="python3"
        rightTitle="javascript"
        left={python3Data.variables}
        right={javascriptData.variables}
      />
    </div>
  );
};

export default JavascriptPage;
