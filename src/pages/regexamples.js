//urls are separated from the examples to simplify updating them
const docs = {
  compile: "https://docs.python.org/3/library/re.html?highlight=re#re.compile",
  match:
    "https://docs.python.org/3/library/re.html?highlight=re#re.Pattern.match",
  search: "https://docs.python.org/3/library/re.html?highlight=re#re.search"
};

const examples = {
  compile: {
    description: "blank",
    "basic-use": null,
    "full-use": null,
    "return-value": null,
    documentation: docs.compile,
    examples: null
  },

  match: {
    description:
      "Matches a pattern starting at the beginning of a string of text. You can choose the range where you want the match to look (zero-indexed). This method is lazy and doesn't continue looking after it finds the first match.",
    "basic-use": "pattern.match(text)",
    "full-use": "pattern.match(text, start, end)",
    "return-value": "A 'match' object or 'None'",
    documentation: docs.match,
    examples: {
      1: {
        text: "cats",
        pattern: "a",
        reg: "pattern.match(text)",
        result: "None"
      },
      2: {
        text: "cats",
        pattern: "a",
        reg: "pattern.match(text, 1)",
        result: "<re.Match object; span=(1, 2), match='a'>"
      },
      3: {
        text: "I like cats.",
        pattern: "like",
        reg: "pattern.match(text, 2)",
        result: "<re.Match object; span=(2, 6), match='like'>"
      }
    }
  },

  search: {
    description:
      "Matches a pattern anywhere in the text. It is not strict like the 'match' method, but it is lazy like it. This method will look for the pattern anywhere in the text starting at index-0 (default), but it won't continue looking after the first match that it finds. It will not look at a lower index that you give for the start.",
    "basic-use": "pattern.search(text)",
    "full-use": "pattern.search(text, start, end)",
    documentation: docs.search,
    "return-value": "A 'match' object or 'None'",
    examples: {
      1: {
        text: "I eat koalas",
        pattern: "eat",
        reg: "pattern.search(text)",
        result: "<re.Match object; span=(2, 5), match='eat'>"
      },
      2: {
        text: "I eat koalas",
        pattern: "eat",
        reg: "pattern.search(text, 2)",
        result: "<re.Match object; span=(2, 5), match='eat'>"
      },
      3: {
        text: "I eat koalas",
        pattern: "eat",
        reg: "pattern.search(text, 3, 10)",
        result: "None"
      },
      4: {
        text: "I enjoy eating koalas",
        pattern: "eat",
        reg: "pattern.search(text, 6, 15)",
        result: "<re.Match object; span=(8, 11), match='eat'>"
      }
    }
  }
};

export default examples;
//examples object keys are the main points in the documentation like
// re.compile becomes "compile" and is a key in the examples object

// Example:
// const examples = {
//   match: "pattern.match(text) does blah blah...",
//   search: "pattern.search(text) does blah blah too, but also blah blah"
// };
