import React from "react";
import { asciiData, specialSequences } from "./asciidata";

const AsciiTable = props => {
  console.log("ascii props: ", props);
  const { chars, handleMouseEnter, handleMouseLeave } = props;
  let list = asciiData.map((item, index) => (
    <span
      key={index}
      className="ascii-character"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      style={
        chars.includes(item.dec) ? { backgroundColor: "lightgreen" } : null
      }
    >
      {item.char}
    </span>
  ));
  return list;
};

const SequenceButtons = props => {
  let list = specialSequences.map((item, index) => (
    <span
      key={index}
      className="sequence-button"
      onClick={() => props.handleClick(item.chars)}
    >
      {item.seq}
    </span>
  ));
  return list;
};

class Sequences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      details: { char: null, name: null, hex: null, dec: null },
      chars: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick = props => {
    console.log("handleClick, props: ", props);
    this.setState(() => {
      return {
        chars: props
      };
    });
  };

  handleMouseEnter = props => {
    //change the details data
    let newDetails = asciiData[props];
    this.setState(() => {
      return {
        details: newDetails
      };
    });
  };

  handleMouseLeave = props => {
    //reset the details data
    let newDetails = { char: null, name: null, hex: null, dec: null };
    this.setState(() => {
      return {
        details: newDetails
      };
    });
  };

  render() {
    let details = this.state.details;
    return (
      <React.Fragment>
        <div className="topic-page">
          <h1>Special Sequences</h1>
          <div className="regex special-sequences">
            <div className="regex-table">
              <AsciiTable
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                {...this.state}
              />
            </div>
            <div className="regex-controls">
              <div className="sequence-buttons">
                <SequenceButtons
                  handleClick={this.handleClick}
                  {...this.state}
                />
              </div>
              <div className="character-details">
                <span className="details-name">Name</span>
                <span className="details-hex">Hex</span>
                <span className="details-dec">Dec</span>
                <span className="details-name">{details.name}</span>
                <span className="details-hex">{details.hex}</span>
                <span className="details-dec">{details.dec}</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sequences;
