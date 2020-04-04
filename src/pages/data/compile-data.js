// import React from "react";

const compileMethod = {
  description: null,
  "basic-use": "re.compile(regex)",
  "full-use": "re.compile(regex, flags=0)",
  "return-value": "re.compile(regex)",
  text: "(none)",
  regex: "'birds'",
  examples: {
    1: {
      reg: "re.compile(regex)",
      result: "re.compile('birds')"
    },
    2: {
      reg: "re.compile(regex, re.A)",
      result: "re.compile('birds', re.ASCII)"
    },
    3: {
      reg: "re.compile(regex, re.A|re.I)",
      result: "re.compile('birds', re.IGNORECASE|re.ASCII)"
    }
  }
};

export default compileMethod;
