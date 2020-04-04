import React from "react";

const patternMethods = [
  {
    method: "search",
    description: null,
    "basic-use": "pattern.search(string)",
    "full-use": "pattern.search(string, start, end)",
    "return-value": "Match object | None",
    text: "Koalas are delicious.",
    pattern: "pattern = re.compile(regex)",
    examples: {
      1: {
        reg: "r'are'",
        result: "<re.Match object; span=(7, 10), match='are'>"
      },
      2: {
        reg: "r'cats'",
        result: "None"
      },
      3: {
        reg: "r'cats'",
        result: "None"
      }
    }
  },

  {
    method: "match",
    description: null,
    "basic-use": "pattern.match(string)",
    "full-use": "pattern.match(string, start, end)",
    "return-value": "Match object | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "fullmatch",
    description: null,
    "basic-use": "pattern.fullmatch(string)",
    "full-use": "pattern.fullmatch(string, start, end)",
    "return-value": "Match object | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "split",
    description: "Same as re.split() function, but different syntax.",
    "basic-use": "pattern.split(string)",
    "full-use": "pattern.split(string, maxsplit=0)",
    "return-value": "List | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "findall",
    description: "Similar to re.findall() function.",
    "basic-use": "pattern.findall(string)",
    "full-use": "pattern.findall(string, start, end)",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "finditer",
    description: "Similar to re.finditer() function.",
    "basic-use": "pattern.finditer(string)",
    "full-use": "pattern.finditer(string, start, end)",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "sub",
    description: "Identical to re.sub() function.",
    "basic-use": "pattern.sub(repl, string)",
    "full-use": "pattern.sub(repl, string, count=0)",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "subn",
    description: "Identical to re.subn() function.",
    "basic-use": "pattern.subn(repl, string)",
    "full-use": "pattern.subn(repl, string, count=0)",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  }
];

const patternAttributes = [
  {
    name: "flags",
    description: (
      <span>
        The flags that you passed to <code>re.compile()</code>
      </span>
    ),
    usage: "pattern.flags",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    name: "groups",
    description: "The number of capturing groups in your pattern.",
    usage: "pattern.groups",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    name: "groupindex",
    description:
      "A dictionary object of any named groups you may have used for the regex object.",
    usage: "pattern.groupindex",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    name: "pattern",
    description:
      "The pattern string from which the pattern object was compiled.",
    usage: "pattern.pattern",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  }
];

export { patternMethods, patternAttributes };
