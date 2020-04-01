import React from "react";

const python3Data = {
  title: "python3",
  variables: {
    // description: "Assigning values to variables is dones like this; ",
    examples: [<code>hats = 4</code>, <code>apples = 3</code>]
  },

  whitespace: {
    // description:
    // "White space is important. Instead of the braces that other languages use, whitespace is used as a delimiter for blocks of code (to define scope).",
    examples: [
      <code>def double_hats(hats): return hats*2</code>,
      <code>def another_cat(): return cat</code>
    ]
  }
};

export default python3Data;
