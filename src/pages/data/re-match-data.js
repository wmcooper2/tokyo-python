const matchMethods = [
  {
    name: "expand",
    description: null,
    "basic-use": "match.expand(template)",
    "full-use": "match.expand(template)",
    "return-value": null,
    examples: {},
  },

  {
    name: "group",
    description: null,
    "basic-use": "match.group()",
    "full-use": "match.group(group_number)",
    "return-value": null,
    examples: {},
  },

  {
    name: "__getitem__",
    description: "The same as match.group(group_number)",
    "basic-use": "match.__getitem__(group_number)",
    "full-use": "match.__getitem__(group_number)",
    "return-value": null,
    examples: {},
  },

  {
    name: "groups",
    description: null,
    "basic-use": "match.groups()",
    "full-use": "match.groups(default=None)",
    "return-value": null,
    examples: {},
  },

  {
    name: "groupdict",
    description: null,
    "basic-use": "match.groupdict(default=None)",
    "full-use": "match.groupdict(default=None)",
    "return-value": null,
    examples: {},
  },

  {
    name: "start",
    description: null,
    "basic-use": "match.start(group)",
    "full-use": "match.start(group)",
    "return-value": null,
    examples: {},
  },

  {
    name: "end",
    description: null,
    "basic-use": "match.end(group)",
    "full-use": "match.end(group)",
    "return-value": null,
    examples: {},
  },

  {
    name: "span",
    description: null,
    "basic-use": "match.span(group)",
    "full-use": "match.span(group)",
    "return-value": null,
    examples: {},
  },
];

const matchAttributes = [
  {
    name: "pos",
    description: "The index of the text where the regex started looking.",
    usage: "match.pos",
    "return-value":
      "Integer (the index of the text that the regex begins looking at) | None",
    examples: {},
  },

  {
    name: "endpos",
    description: "The index of the text where the regex will not look past.",
    usage: "match.endpos",
    "return-value":
      "Integer (the index of the text that the regex will not look past [be careful of 0 or 1 indexing here]) | None",
    examples: {},
  },

  {
    name: "lastindex",
    description: "The LAST INDEX of a captured group or 'None'.",
    usage: "match.lastindex",
    "return-value":
      "Integer (the last index [1-indexed] of the captured group) | None",
    examples: {},
  },

  {
    name: "lastgroup",
    description: "The NAME of the last captured group or 'None'.",
    usage: "match.lastgroup",
    "return-value":
      "String (the name of the last captured named-group [see (?P<name>)] ) | None ",
    examples: {},
  },

  {
    name: "re",
    description: "The regex object that you created.",
    usage: "match.re",
    "return-value":
      "Regex Object (the compiled regular expression object [re.pattern])",
    examples: {},
  },

  {
    name: "string",
    description: "The text that you searched through using the regex.",
    usage: "match.string",
    "return-value":
      "String (the text you are searching through with the regex)",
    examples: {},
  },
];

export { matchMethods, matchAttributes };
