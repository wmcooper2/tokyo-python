import React from "react";
//urls are separated from the examples to simplify updating them
const docs = {
  re: "https://docs.python.org/3/library/re.html",
  compile: "https://docs.python.org/3/library/re.html#re.compile",
  match: "https://docs.python.org/3/library/re.html#regular-expression-objects",
  pattern:
    "https://docs.python.org/3/library/re.html#regular-expression-objects",
};

const basicConcepts = {
  re: {
    description: (
      <p>
        <code>re</code> is the module's name.
      </p>
    ),
    documentation: docs.re,
  },
  compile: {
    description: (
      <p>
        The <code>compile</code> <strong>method</strong> is the foundation of
        Python's regex module. You can save the object returned by{" "}
        <code>re.compile()</code> into a variable, then it is a{" "}
        <code>pattern</code> <strong>object</strong> that can be reused later.
      </p>
    ),
    "basic-use": "re.compile(pattern)",
    "full-use": "re.compile(pattern, flags=0)",
    "return-value": "re.compile(pattern)",
    documentation: docs.compile,
  },

  pattern: {
    description: (
      <p>
        The <code>pattern</code> <strong>object</strong>. The documentation can
        be confusing regarding the pattern object and the re module methods. I
        think this is because the pattern method's names are so similar to the
        ones under <code>re</code> in the documentation. The{" "}
        <code>pattern</code> <strong>object</strong> is a regular expression
        object returned from the module level <code>re.compile</code>{" "}
        <strong>method</strong>. Don't confuse them.
      </p>
    ),
    documentation: docs.pattern,
  },

  match: {
    description: (
      <p>
        The <code>match</code> <strong>object</strong> is different from the{" "}
        <code>re.compile</code> <strong>method</strong> and <code>pattern</code>{" "}
        <strong>object</strong>. Read the docs very carefully.
      </p>
    ),
    documentation: docs.match,
  },
};

const basicCharacters = [
  {
    character: ".",
    description: (
      <span>
        Basically <code>[^\n]</code>. Changes with with <code>re.S</code> flag.
      </span>
    ),
  },

  {
    character: "^",
    description: (
      <span>
        START BOUNDARY of a string. Changes with <code>re.M</code> flag.
      </span>
    ),
  },

  {
    character: "$",
    description: (
      <span>
        END BOUNDARY of a string. Changes with <code>re.M</code> flag.
      </span>
    ),
  },

  {
    character: "*",
    description: "0 or more, greedy",
  },

  {
    character: "+",
    description: "1 or more, greedy",
  },

  {
    character: "?",
    description: "0 or 1, greedy",
  },

  {
    character: "*?",
    description: "0 or more, lazy",
  },

  {
    character: "+?",
    description: "1 or more, lazy",
  },

  {
    character: "??",
    description: "0 or 1, lazy",
  },

  {
    character: "{m}",
    description: "Exactly m",
  },

  {
    character: "{m,n}",
    description: "From m to n, inclusive, greedy",
  },

  {
    character: "{m,n}?",
    description: "From m to n, inclusive, lazy",
  },

  {
    character: "\\",
    description: "Escape character",
  },

  {
    character: "|",
    description: "Alternation ('or')",
  },

  {
    character: "[...]",
    description: "Any single character in this class",
  },

  {
    character: "(...)",
    description: "Capturing group",
  },

  {
    character: "(?:...)",
    description: "Non-capturing group",
  },

  {
    character: "(?#...)",
    description: "Use this to make a comment in a regex",
  },

  {
    character: "(?=...)",
    description: "POS look AHEAD",
  },

  {
    character: "(?!...)",
    description: "NEG look AHEAD",
  },

  {
    character: "(?<=...)",
    description: "POS look BEHIND",
  },

  {
    character: "(?<!...)",
    description: "NEG look BEHIND",
  },

  {
    character: "(?P<name>...)",
    description: "Assign a name to a capturing group",
  },

  {
    character: "(?P=name)",
    description: "Backreference to a named capturing group",
  },

  {
    character: "(?(id/name)yes|no)",
    description: null,
  },

  {
    character: "(?aiLmsux)",
    description: null,
  },

  {
    character: "(?aiLmsux-imsx:...)",
    description: null,
  },
];

export { basicConcepts, basicCharacters };
//examples object keys are the main points in the documentation like
// re.compile becomes "compile" and is a key in the examples object

// Template:
// const examples = {
//   method: {
// description: String,
// "basic-use": String,
// "full-use": String,
// "return-value": String,
// documentation: var -> String,
// examples: {
// 1 {
// text: String,
// pattern: String,
// reg: String,
// result: String,
//}

// }
//   search: "pattern.search(text) does blah blah too, but also blah blah"
// };
