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
      <h1 className="left-align">Compile Page</h1>
      <p>
        The <code>re.compile(pattern)</code> method returns a{" "}
        <strong>'compiled regular expression object'</strong>. It is the
        foundation of Python's regex module. It is the only method that gets
        flags passed to it. This method does not have a text argument. It only
        compiles the pattern into a regex object to be used later.,
      </p>
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
