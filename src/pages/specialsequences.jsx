import React from "react";
import { asciiData, specialSequences } from "./asciidata";

const AsciiTable = props => {
  console.log("ascii props: ", props);
  let list = asciiData.map((item, index) => (
    <span
      key={index}
      className="ascii-character"
      onMouseEnter={() => props.handleMouseEnter(index)}
      onMouseLeave={() => props.handleMouseLeave(index)}
    >
      {item}
    </span>
  ));
  return list;
};

const Sequences = props => {
  let list = specialSequences.map((item, index) => (
    <span
      key={index}
      className="sequence-button"
      onClick={() => props.handleClick(item)}
    >
      {item}
    </span>
  ));
  return list;
};

class SpecialSequences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      details: { hex: "xxx", oct: "ooo", number: null }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick = props => {
    console.log(props);
  };

  handleMouseEnter = props => {
    //change the details data
    // console.log("entered: ", props);
    let newDetails = this.state.details;
    newDetails.number = props;
    this.setState(() => {
      return {
        details: newDetails
      };
    });
  };

  handleMouseLeave = props => {
    //reset the details data
    // console.log("left: ", props);
    let newDetails = this.state.details;
    newDetails.number = null;
    this.setState(() => {
      return {
        details: newDetails
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="regex special-sequences">
          <div className="regex-table">
            <AsciiTable
              handleMouseEnter={this.handleMouseEnter}
              handleMouseLeave={this.handleMouseLeave}
            />
          </div>
          <div className="character-details">{this.state.details.number}</div>
          <div className="sequence-buttons">
            <Sequences handleClick={this.handleClick} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SpecialSequences;
