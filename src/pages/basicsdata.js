//urls are separated from the examples to simplify updating them
const docs = {
  re: "https://docs.python.org/3/library/re.html",
  compile: "https://docs.python.org/3/library/re.html#re.compile",
  match: "https://docs.python.org/3/library/re.html#regular-expression-objects",
  pattern:
    "https://docs.python.org/3/library/re.html#regular-expression-objects"
};

const regexObjects = {
  re: {
    description: "'re' is the module name.",
    args: false,
    documentation: docs.re
  },
  compile: {
    description:
      "The 'compile' method is the foundation of Python's regex module. You can save the object returned by re.compile() into a variable, then it is a 'pattern' object that can be reused later.",
    args: false,
    "basic-use": "re.compile(pattern)",
    "full-use": "re.compile(pattern, flags=0)",
    "return-value": "re.compile(pattern)",
    documentation: docs.compile
  },

  pattern: {
    description:
      "The 'pattern' object. The documentation can be confusing regarding the pattern object and the re module methods. I think this is because the pattern method's names are so similar to the ones under 're' in the documentation. The pattern object is a regular expression object returned from the module level 're.compile' method. Don't confuse them.",
    args: false,
    documentation: docs.pattern
  },

  match: {
    description:
      "The 'match' object is different from the 're.compile' method and 'pattern' object. Read the docs very carefully. The match and pattern objects have different methods.",
    args: false,
    documentation: docs.match
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
