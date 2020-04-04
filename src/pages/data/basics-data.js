import React from "react";
//urls are separated from the examples to simplify updating them
const docs = {
  re: "https://docs.python.org/3/library/re.html",
  compile: "https://docs.python.org/3/library/re.html#re.compile",
  match: "https://docs.python.org/3/library/re.html#regular-expression-objects",
  pattern:
    "https://docs.python.org/3/library/re.html#regular-expression-objects"
};

const basicConcepts = {
  re: {
    description: (
      <p>
        <code>re</code> is the module's name.
      </p>
    ),
    documentation: docs.re
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
    documentation: docs.compile
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
    documentation: docs.pattern
  },

  match: {
    description: (
      <p>
        The <code>match</code> <strong>object</strong> is different from the{" "}
        <code>re.compile</code> <strong>method</strong> and <code>pattern</code>{" "}
        <strong>object</strong>. Read the docs very carefully.
      </p>
    ),
    documentation: docs.match
  }
};

const basicCharacters = [
  {
    character: ".",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "^",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "$",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "*",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "+",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "?",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "*?",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "+?",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "??",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "{m}",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "{m,n}",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "{m,n}?",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "\\",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "|",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "[...]",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?:...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?#...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?=...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?!...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?<=...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?<!...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?P<name>...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?P=name)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?(id/name)yes-pattern|no-pattern)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?aiLmsux)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    character: "(?aiLmsux-imsx:...)",
    description: null,
    usage: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  }
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
