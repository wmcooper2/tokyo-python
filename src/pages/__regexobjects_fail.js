//urls are separated from the examples to simplify updating them
const docs = {
  compile: "https://docs.python.org/3/library/re.html?highlight=re#re.compile",
  match:
    "https://docs.python.org/3/library/re.html?highlight=re#re.Pattern.match",
  search: "https://docs.python.org/3/library/re.html?highlight=re#re.search"
};

const regexObjects = {
  compile: {
    description:
      "'compile' returns a compiled regular expression object. It is the foundation of Python's regex module. Flags passed to it are separated with a bar.",
    "basic-use": "re.compile(pattern)",
    "full-use": "re.compile(pattern, flags=0)",
    "return-value": "re.compile(pattern)",
    documentation: docs.compile,
    examples: {
      1: {
        text: null,
        pattern: "birds",
        reg: "re.compile(pattern)",
        result: "re.compile('birds')"
      },
      2: {
        text: null,
        pattern: "birds",
        reg: "re.compile(pattern, re.A)",
        result: "re.compile('birds', re.ASCII)"
      },
      3: {
        text: null,
        pattern: "birds",
        reg: "re.compile(pattern, re.A|re.I)",
        result: "re.compile('birds', re.IGNORECASE|re.ASCII)"
      }
    }
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

export default regexObjects;
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
