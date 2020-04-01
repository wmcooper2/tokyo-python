import React from "react";

const sites = [
  { name: "regex101.com", url: "https://regex101.com", description: null },
  {
    name: "regexbuddy.com",
    url: "https://www.regexbuddy.com",
    description: null
  },
  { name: "buildregex.com", url: "http://buildregex.com/", description: null }
];

const sitesList = sites.map((item, index) => (
  <li key={index}>
    <a href={item.url}>{item.name}</a>
  </li>
));

const HowTo = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">How To Page</h1>
      <p>
        How to make a regular expression is a very difficult thing to answer. I
        have read a lot of material on the subject, and I am far from being an
        expert.
      </p>
      <p>
        I do recommend reading this{" "}
        <a href="https://www.amazon.com/Jeffrey-E-F-Friedl/e/B000APS5VQ/ref=dp_byline_cont_book_1">
          book.
        </a>
      </p>
      <p>
        Here is a collection of sites that I find useful for regular
        expressions.
      </p>
      <ul>{sitesList}</ul>
    </div>
  );
};

export default HowTo;
