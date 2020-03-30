const patternMethods = [
  {
    method: "search",
    "basic-use": "pattern.search(string)",
    "full-use": "pattern.search(string, start, end)",
    description: null,
    "return-value": "Match object | None",
    examples: {
      1: {
        text: "Koalas are delicious.",
        pattern: "pattern = re.compile(regex)",
        reg: "r'are'",
        result: "<re.Match object; span=(7, 10), match='are'>"
      },
      2: {
        text: "Koalas are delicious.",
        pattern: "pattern = re.compile(regex)",
        reg: "r'cats'",
        result: "None"
      },
      3: {}
    }
  },

  {
    method: "match",
    "basic-use": "pattern.match(string)",
    "full-use": "pattern.match(string, start, end)",
    description: null,
    "return-value": "Match object | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "fullmatch",
    "basic-use": "pattern.fullmatch(string)",
    "full-use": "pattern.fullmatch(string, start, end)",
    description: null,
    "return-value": "Match object | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "split",
    "basic-use": "pattern.split(string)",
    "full-use": "pattern.split(string, maxsplit=0)",
    description: "Same as re.split() function, but different syntax.",
    "return-value": "List | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "findall",
    "basic-use": "pattern.findall(string)",
    "full-use": "pattern.findall(string, start, end)",
    description: "Similar to re.findall() function.",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "finditer",
    "basic-use": "pattern.finditer(string)",
    "full-use": "pattern.finditer(string, start, end)",
    description: "Similar to re.finditer() function.",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "sub",
    "basic-use": "pattern.sub(repl, string)",
    "full-use": "pattern.sub(repl, string, count=0)",
    description: "Identical to re.sub() function.",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "subn",
    "basic-use": "pattern.subn(repl, string)",
    "full-use": "pattern.subn(repl, string, count=0)",
    description: "Identical to re.subn() function.",
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
    usage: "pattern.flags",
    description: "The flags that you passed to 're.compile()'.",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    name: "groups",
    usage: "pattern.groups",
    description: "The number of capturing groups in your pattern.",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    name: "groupindex",
    usage: "pattern.groupindex",
    description:
      "A dictionary object of any named groups you may have used for the regex object.",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    name: "pattern",
    usage: "pattern.pattern",
    description:
      "The pattern string from which the pattern object was compiled.",
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  }
];

export { patternMethods, patternAttributes };
