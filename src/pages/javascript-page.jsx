import React from "react";
import Comparison from "./components/comparison";
import python3Data from "./data/python3-data";
import javascriptData from "./data/javascript-data";

const JavascriptPage = () => {
  return (
    <div className="javascript topic-page">
      <div className="comparison-title">
        <h1 className="left-half">Python</h1>
        <h1 className="right-half">JavaScript</h1>
      </div>
      <Comparison
        title="variables"
        leftTitle="python3"
        rightTitle="javascript"
        left={python3Data.variables}
        right={javascriptData.variables}
      />
      <Comparison
        title="whitespace"
        leftTitle="python3"
        rightTitle="javascript"
        left={python3Data.whitespace}
        right={javascriptData.whitespace}
      />
      <Comparison
        title="strings"
        leftTitle="python3"
        rightTitle="javascript"
        left={python3Data.strings}
        right={javascriptData.strings}
      />
      <Comparison
        title="comments"
        leftTitle="python3"
        rightTitle="javascript"
        left={python3Data.comments}
        right={javascriptData.comments}
      />
    </div>
  );
};

export default JavascriptPage;
