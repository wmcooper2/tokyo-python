import React from "react";

const compileMethod = {
  description:
    "The 're.compile(pattern)' returns a 'compiled regular expression object'. It is the foundation of Python's regex module. Flags passed to it are separated with a bar.",
  "basic-use": "re.compile(pattern)",
  "full-use": "re.compile(pattern, flags=0)",
  "return-value": "re.compile(pattern)",
  text: null,
  pattern: "birds",
  examples: {
    1: {
      reg: "re.compile(pattern)",
      result: "re.compile('birds')"
    },
    2: {
      reg: "re.compile(pattern, re.A)",
      result: "re.compile('birds', re.ASCII)"
    },
    3: {
      reg: "re.compile(pattern, re.A|re.I)",
      result: "re.compile('birds', re.IGNORECASE|re.ASCII)"
    }
  }
};

const ArgsTable = props => {
  return (
    <table className="args-table">
      <thead>
        <tr>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Required</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td className="basic-use">
            <code className="">{props["basic-use"]}</code>
          </td>
          <td className="full-use">
            <code className="">{props["full-use"]}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const ExampleTable = props => {
  const { index, value } = props;
  return (
    <table className="method-table">
      <thead>
        <tr>
          <th>Ex {index}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cell-label">Regex:</td>
          <td>
            <code className="regex-code">{value.reg}</code>
          </td>
        </tr>
        <tr>
          <td className="cell-label">Result:</td>
          <td>
            <code className="regex-result">{value.result}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Examples = () => {
  const examples = [];
  for (let [key, value] of Object.entries(compileMethod.examples)) {
    examples.push(<ExampleTable key={key} index={key} value={value} />);
  }
  return examples;
};

const TextPatternTable = props => {
  console.log("TPT: ", props);
  return (
    <table className="text-pattern-table">
      <thead>
        <tr>
          <th className="cell-label">Text</th>
          <th className="cell-label">Pattern</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code className="regex-text">{props.text}</code>
          </td>
          <td>
            <code className="regex-pattern">{props.pattern}</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
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
