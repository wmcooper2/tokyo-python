import React from "react";

const RegexPage = () => {
  return (
    <div className="topic-page">
      <h1>Regex Page</h1>
      <p>Regular expressions are awesome.</p>
      <p>
        This is meant to be summary of the official documentation. When learning
        about regular expressions in Python, there are 4 major points that you
        should be careful not to confuse;
      </p>
      <ul>
        <li>
          the <code>re</code> module itself,
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

      <p>Start with the basics section on the left.</p>
    </div>
  );
};

export default RegexPage;
