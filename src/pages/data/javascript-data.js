import React from "react";

const javascriptData = {
  title: "javascript",
  variables: {
    description: "There are 4 ways; ",
    examples: [
      <code>cars = 4</code>,
      <code>var cars = 4</code>,
      <code>let cars = 4</code>,
      <code>const cars = 4</code>
    ]
  },

  whitespace: {
    description: "Whitespace is not important.",
    examples: [
      <pre>
        <code>
          {`function hats(hats){
    return hats*2
}`}
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
      <code>{`\`templates with \${variables}, use backticks\``}</code>
    ]
  },

  comments: {
    description: null,
    examples: [
      <code>//double slash for single lines</code>,
      <pre>
        <code>{`/*
slash-star sandwich 
for
multi-line
*/`}</code>
      </pre>
    ]
  }
};

export default javascriptData;
