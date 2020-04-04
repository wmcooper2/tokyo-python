import React from "react";

const ExamplesPage = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">Examples</h1>
      <p>
        Let's see how "." behaves with the search method like this;
        <br />
        <code>
          <span>re.search(".", data)</span>
        </code>
      </p>

      <p>
        Assume you have a text file named <code>simple.txt</code> with two lines
        in it.
      </p>
      <pre className="example">
        <code>{`      #simple.txt
      I like birds.
      I eat koalas.
`}</code>
      </pre>

      <p>
        The regex engine just sees it as one long string like this;
        <br />
        <code>
          <span>I like birds.\n I eat koalas.</span>
        </code>{" "}
      </p>

      <p>
        This simple regex will match the green area like this; <br />
        <code className="special-character">
          <span className="match">I</span>
          <span className="nomatch"> like birds.\nI eat koalas.</span>
        </code>
      </p>
      <p>
        "." matches only a single character. If you want to match more than just
        the first character, then you need to use a quantifier like these;{" "}
        <br />
        <ul>
          <li>
            <code>*</code>
          </li>
          <li>
            <code>+</code>
          </li>
          <li>
            <code>?</code>
          </li>
          <li>
            <code>{`{m,n}`}</code>
          </li>
        </ul>
      </p>

      <p>
        Let's change the regex pattern to try and match more characters;
        <br />
        <code>
          <span>re.search(".*", data)</span>
        </code>
        <br />
      </p>
      <p>
        Result; <br />
        <code className="special-character">
          <span className="match">I like birds.</span>
          <span className="nomatch">\n</span>
          <span className="match">I eat koalas.</span>
        </code>
      </p>
    </div>
  );
};

export default ExamplesPage;
