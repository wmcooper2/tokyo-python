import React from "react";

const python3Data = {
  title: "python3",
  variables: {
    description: "Assigning values to variables is done like this; ",
    examples: [<code>hats = 4</code>, <code>apples = 3</code>]
  },

  whitespace: {
    description: "Whitespace is used as a delimiter for blocks of code.",
    examples: [
      <pre>
        <code>
          {`def double_hats(hats):
    return hats*2`}
        </code>
      </pre>
    ]
  },

  strings: {
    description: "There are several ways to make strings.",
    examples: [
      <code>'single quotes'</code>,
      <code>"double quotes"</code>,
      <code>`backticks`</code>,
      <code>{`\`templates with {variables}, use backticks\``}</code>
    ]
  },

  comments: {
    description: null,
    examples: [
      <code># hash for single lines</code>,

      <pre>
        <code>{`'''triple single quotes
for multi-line'''`}</code>
      </pre>,
      <pre>
        <code>{`"""or triple double quotes
for multi-line"""`}</code>
      </pre>
    ]
  }
};

export default python3Data;

// strings: {
// description: null,
// examples: []
// }
