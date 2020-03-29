import React from "react";

const RegexPage = props => {
  return (
    <div className="topic-page">
      <h1>Regex Page</h1>
      <p>Regular expressions are awesome.</p>
      <p>
        When learning about regular expressions in Python, there are 4 major
        points that you should be careful not to confuse;
        <ul>
          <li>
            The <code>re</code> module itself,
          </li>
          <li>
            the <code>compile</code> method,
          </li>
          <li>
            the <code>pattern</code> object, and
          </li>
          <li>
            the <code>match</code> object.
          </li>
        </ul>
      </p>
      <p>Start with the basics section on the left.</p>
    </div>
  );
};

export default RegexPage;
