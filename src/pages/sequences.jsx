import React from "react";
import { asciiData, specialSequences } from "./data/ascii-data";

const AsciiTable = props => {
  // console.log("ascii props: ", props);
  const { chars, handleMouseEnter, handleMouseLeave } = props;
  let list = asciiData.map((item, index) => (
    <span
      key={index}
      className="ascii-character"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      style={
        chars.includes(item.dec)
          ? { backgroundColor: "lightblue", color: "black" }
          : null
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
      onClick={() => props.handleClick(item)}
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
      chars: [],
      sequenceDescription: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick = props => {
    const { chars, description } = props;
    // console.log("handleClick, desc: ", description);
    this.setState(() => {
      return {
        chars: chars,
        description: description
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
        <div className="sequences topic-page">
          <h1 className="sequences-title">Special Sequences</h1>
          <p>
            I gave the sequences their own page so that it would be easier to
            show the groups of ascii characters that relate to the sequences
            easier. Some sequences don't match an ascii character directly, so
            you will see that none of the characters are highlighted when you
            click on the sequence.
          </p>
          <p>
            Hover over the characters to see more details about them. Click the
            sequences below for a short description of each and which characters
            they relate to.
          </p>
          <div className="encodings">
            {/* maybe shouldn't do encoding buttons... too many characters?  Just stick with ASCII...*/}
            <button className="encoding">ASCII</button>
            <button className="encoding" disabled>
              UTF-8
            </button>
            <button className="encoding" disabled>
              UTF-16
            </button>
            <button className="encoding" disabled>
              Unicode
            </button>
          </div>

          <div className="special-sequences">
            <div className="ascii-grid">
              <AsciiTable
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
                {...this.state}
              />
            </div>
            <div className="sequence-buttons">
              <SequenceButtons handleClick={this.handleClick} {...this.state} />
            </div>

            <div className="character-details">
              <span className="details-name">Name</span>
              <span className="details-name">{details.name}</span>
              <span className="details-hex">Hex</span>
              <span className="details-hex">{details.hex}</span>
              <span className="details-dec">Dec</span>
              <span className="details-dec">{details.dec}</span>
            </div>
            <div className="sequence-description">{this.state.description}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sequences;
