import React from "react";

const compileMethod = {
  description: null,
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
