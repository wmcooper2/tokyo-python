import React from "react";

const Examples = props => {
//   console.log("Examples: ", props);
  const { data } = props;
  let examples = data.map((item, index) => <span key={index}>{item}</span>);
  return <div className="comparison code examples">{examples}</div>;
};

const Left = props => {
//   console.log("Left: ", props);
  return (
    <div className="left-half">
      <h3>{props.title}</h3>
      <Examples data={props.examples} />
    </div>
  );
};

const Right = props => {
//   console.log("Right: ", props);
  return (
    <div className="right-half">
      <h3>{props.title}</h3>
      <Examples data={props.examples} />
    </div>
  );
};

const Comparison = props => {
  return (
    <div className="comparison-section">
      <h2>{props.title}</h2>
      <div className="comparison">
        <Left title={props.leftTitle} {...props.left} />
        <Right title={props.rightTitle} {...props.right} />
      </div>
    </div>
  );
};

export default Comparison;
