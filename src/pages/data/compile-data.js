const compileMethod = {
  description:
    "The 're.compile(pattern)' returns a 'compiled regular expression object'. It is the foundation of Python's regex module. Flags passed to it are separated with a bar as in the examples below. This method does not have a text argument. It only compiles the pattern into a regex object.",
  "basic-use": "re.compile(pattern)",
  "full-use": "re.compile(pattern, flags=0)",
  "return-value": "re.compile(pattern)",
  text: null,
  pattern: "birds",
  examples: {
    1: {
      reg: "re.compile(pattern)",
      result: "re.compile('birds')"
    },
    2: {
      reg: "re.compile(pattern, re.A)",
      result: "re.compile('birds', re.ASCII)"
    },
    3: {
      reg: "re.compile(pattern, re.A|re.I)",
      result: "re.compile('birds', re.IGNORECASE|re.ASCII)"
    }
  }
};

export default compileMethod;
