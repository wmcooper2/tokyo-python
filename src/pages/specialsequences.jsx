import React from "react";
import asciiData from "./asciidata";

const asciiTable = asciiData.map(item => (
  <span className="ascii-character">{item}</span>
));

const specials = [
  "\\s",
  "\\d",
  "\\w",
  "\\b",
  "\\S",
  "\\D",
  "\\W",
  "\\B",
  "\\number",
  "\\0",
  "\\X",
  "[\\b]",
  "\\A",
  "\\Z"
];

const pairs = specials.map(item => (
  <span className="sequence-button">{item}</span>
));

const SpecialSequences = () => {
  return (
    <React.Fragment>
      <div className="regex special-sequences">
        <div className="regex-table">{asciiTable}</div>
        <div className="sequence-buttons">{pairs}</div>
      </div>
    </React.Fragment>
  );
};

export default SpecialSequences;
