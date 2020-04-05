import React from "react";

const sites = [
  { name: "regex101.com", url: "https://regex101.com", description: null },
  {
    name: "regexbuddy.com",
    url: "https://www.regexbuddy.com",
    description: null,
  },
  { name: "buildregex.com", url: "http://buildregex.com/", description: null },
];

const sitesList = sites.map((item, index) => (
  <li key={index}>
    <a className="custom-link" href={item.url}>
      {item.name}
    </a>
  </li>
));

const HowTo = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">How To</h1>
      <p>
        How to make a regular expression is a very difficult thing to answer. I
        have read a lot of material on the subject, and I am far from being an
        expert. I'll do what I can to help explain the basics, but beyond that
        you just have to play with them to find out for yourself.
      </p>
      <p>
        I do recommend reading{" "}
        <a
          className="custom-link"
          href="https://www.amazon.com/Jeffrey-E-F-Friedl/e/B000APS5VQ/ref=dp_byline_cont_book_1"
        >
          this book.
        </a>{" "}
        It's really detailed and can be difficult to read, but if you're really
        interested in regexes then it's worth it.
      </p>
      <p>
        Here is a collection of sites that I find useful for regular
        expressions.
      </p>
      <ul>{sitesList}</ul>
      <p>
        I find that when I am thinking about making a regex, it helps to go
        through the special characters one by one like a checklist to make sure
        you are thinking about how all the possibilities of those characters
        relate to the thing you want to search for. You can find a summarized
        list of special characters at the "basics" subtopic on the left.
      </p>
      <p>Examples...</p>
    </div>
  );
};

export default HowTo;
