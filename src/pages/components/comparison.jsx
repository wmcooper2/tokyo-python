import React from "react";

const Examples = props => {
  //   console.log("Examples: ", props);
  const { data } = props;
  //   let examples = data.map((item, index) => <span key={index}>{item}</span>);
  let examples = data.map((item, index) => (
    <span className="code-example" key={index}>
      {item}
    </span>
  ));
  return <div className="comparison code">{examples}</div>;
};

const Left = props => {
  //   console.log("Left: ", props);
  return (
    <div className="left-half">
      <p>{props.description}</p>
      <Examples data={props.examples} />
    </div>
  );
};

const Right = props => {
  //   console.log("Right: ", props);
  return (
    <div className="right-half">
      <p>{props.description}</p>
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
