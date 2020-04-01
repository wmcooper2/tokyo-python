import React from "react";

const javascriptData = {
  title: "javascript",
  variables: {
    // description: "Assigning values to variables is dones like this; ",
    examples: [
      <code>cars = 4</code>,
      <code>var cars = 4</code>,
      <code>let cars = 4</code>,
      <code>const cars = 4</code>
    ]
  },

  whitespace: {
    // description:
    //   "White space is important. Instead of the braces that other languages use, whitespace is used as a delimiter for blocks of code (to define scope).",
    examples: [
      <code>
        <pre>{`function hats(hats){ return hats*2}`}</pre>
      </code>
    ]
  }
};

export default javascriptData;
