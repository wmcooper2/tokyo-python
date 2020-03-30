import React from "react";
import ArgsTable from "./components/args-table";
import ExampleTable from "./components/example-table";
import TextPatternTable from "./components/text-pattern-table";
import compileMethod from "./data/compile-data";

const Examples = () => {
  const examples = [];
  for (let [key, value] of Object.entries(compileMethod.examples)) {
    examples.push(<ExampleTable key={key} index={key} value={value} />);
  }
  return examples;
};

const CompilePage = () => {
  return (
    <div className="topic-page">
      <h1>Compile Page</h1>
      <p>{compileMethod.description}</p>
      <ArgsTable {...compileMethod} />
      <TextPatternTable
        text={compileMethod.text}
        pattern={compileMethod.pattern}
      />
      <Examples />
    </div>
  );
};

export default CompilePage;
