const reFlags = [
  { short: "re.A", long: "re.ASCII", description: null },
  { short: null, long: "re.DEBUG", description: null },
  { short: "re.I", long: "re.IGNORECASE", description: null },
  { short: "re.L", long: "re.LOCALE", description: null },
  { short: "re.M", long: "re.MULTILINE", description: null },
  { short: "re.S", long: "re.DOTALL", description: null },
  { short: "re.X", long: "re.VERBOSE", description: null }
];

const reMethods = [
  {
    method: "compile",
    "basic-use": "re.compile(pattern)",
    "full-use": "re.compile(pattern, flags=0)",
    description: "This method the foundation of this module.",
    "return-value": "Compiled Regex Object | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "search",
    "basic-use": "re.search(pattern, string)",
    "full-use": "re.search(pattern, string, flags=0)",
    description: null,
    "return-value": "Match object | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "match",
    "basic-use": "re.match(pattern, string)",
    "full-use": "re.match(pattern, string, flags=0)",
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
    "basic-use": "re.fullmatch(pattern, string)",
    "full-use": "re.fullmatch(pattern, string, flags=0)",
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
    "basic-use": "re.split(pattern, string)",
    "full-use": "re.split(pattern, string, maxsplit=0, flags=0)",
    description: null,
    "return-value": "List | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "findall",
    "basic-use": "re.findall(pattern, string)",
    "full-use": "re.findall(pattern, string, flags=0)",
    description: null,
    "return-value": "List of Tuples | None",
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "finditer",
    "basic-use": "re.finditer(pattern, string)",
    "full-use": "re.finditer(pattern, string, flags=0)",
    description: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "sub",
    "basic-use": "re.sub(pattern, repl, string)",
    "full-use": "re.sub(pattern, repl, string, count=0, flags=0)",
    description: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "subn",
    "basic-use": "re.subn(pattern, repl, string)",
    "full-use": "re.subn(pattern, repl, string, count=0, flags=0)",
    description: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "escape",
    "basic-use": "re.escape(pattern)",
    "full-use": "re.escape(pattern)",
    description: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  },

  {
    method: "purge",
    "basic-use": "re.purge()",
    "full-use": "re.purge()",
    description: null,
    "return-value": null,
    examples: {
      1: {},
      2: {},
      3: {}
    }
  }
];

export { reFlags, reMethods };
