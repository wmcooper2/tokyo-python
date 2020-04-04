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
    <div className="topic-page compile">
      <h1 className="left-align">Compile Page</h1>
      <p>
        The <code>re.compile(regex)</code> method returns a{" "}
        <strong>'compiled regular expression object'</strong>. It is the
        foundation of Python's regex module. It is the only method that gets
        flags passed to it. This method does not have a text argument. It only
        compiles the regular expression you give it into a regex object to be
        used later.
      </p>
      <ArgsTable {...compileMethod} />
      <TextPatternTable text={compileMethod.text} regex={compileMethod.regex} />
      <Examples />
      <p>
        The <code>compile</code> method doesn't take "text" as an input
        parameter. It's purpose is to compile the regular expression you give it
        into an object that will later take the text you want to apply it to. In
        the examples above, my regex input "variable" is the literal string
        "birds". Each example shows that either way of using{" "}
        <code>re.compile(regex)</code> is okay.
      </p>
      <p>
        I want to emphasize being careful about the similar method names between
        the module "re" and the pattern object created by the "compile" method.
        Here is a simple example of what you would see in your terminal when
        making a compiled regular expression object;
      </p>
      <div className="terminal-code">
        <pre>
          <code>
            {`     >>> import re
      >>> regex = 'birds'
      >>> pattern_object = re.compile(regex)
      >>> pattern_object
            re.compile('birds')`}
          </code>
        </pre>
      </div>
      <p>
        The compiled regular expression object stored in{" "}
        <code>pattern_object</code> can be reused later. This newly created
        object has its own methods that you will use to search through text
        with. See the "pattern" subtopic link on the left to continue.
      </p>
      <p>
        Escaping special characters in a regex is annoying, so I prefer to just
        use raw strings instead;
      </p>
      <div className="terminal-code">
        <pre>
          <code>{`example here`}</code>
        </pre>
      </div>
    </div>
  );
};

export default CompilePage;
