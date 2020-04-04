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
      <p>
        In the terminal, let's make a pattern object (compiled regular
        expression object);
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
        Now, <code>pattern_object</code> is a "compiled regular expression
        object". It is very limited in that it will only ever match the exact
        string 'birds' where ever it is found. Continuing from the previous
        code;
      </p>
      <div className="terminal-code">
        <pre>
          <code>
            {`       >>> text1 = 'I like birds.'
        >>> pattern_object.search(text1)
              <re.Match object; span=(7, 12), match='birds'>
        >>> text2 = 'catscatscatsbirdscats'
        >>> pattern_object.search(text2)
              <re.Match object; span=(12, 17), match='birds'>`}
          </code>
        </pre>
      </div>
      <p>
        In <code>text1</code>, a match was found beginning at index 7. In{" "}
        <code>text2</code> a match was found beginning at index 12. Notice that
        I used the <code>search</code> <strong>method</strong> on a{" "}
        <code>pattern</code> <strong>object</strong>.
      </p>
    </div>
  );
};

export default PatternPage;
