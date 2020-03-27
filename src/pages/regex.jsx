import React from "react";

const RegexPage = props => {
  return (
    <div className="topic-page">
      <h1>Regex Page</h1>
      <p>Regular expressions are awesome.</p>
      <p>
        In Python's <code>re</code> module, there are 4 major points that you
        should be careful not to confuse;
      </p>
      <ul>
        <li>
          The <code>re</code> module,
        </li>
        <li>
          the <code>re.compile</code> method,
        </li>
        <li>
          the <code>pattern</code> object, and
        </li>
        <li>
          the <code>match</code> object.
        </li>
      </ul>
      <p>Start with the basics section on the left.</p>
    </div>
  );
};

export default RegexPage;
