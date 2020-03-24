import React from "react";
import HomeIndex from "./pages/homeindex";
import AboutUs from "./pages/aboutus";

//index is the home page for that topic, not the home page for the site
const pageData = {
  home: {
    path: "home",
    title: "home nav",
    topics: {
      "about-us": { name: "About", content: <AboutUs /> },
      "contact-us": { name: "Contact", content: "contact us component" }
    },
    index: <HomeIndex />
  },
  regex: {
    path: "regex",
    title: "regex nav",
    topics: {
      "how-to": { name: "How to", content: "how to component" },
      explanation: { name: "The basics", content: "basics component" },
      examples: "Examples"
    },
    index: "regex index"
  },
  meetup: {
    path: "meetup",
    title: "meetup nav",
    topics: {
      TPSC: { name: "Tokyo Python Society Club", content: "tpsc component" },
      "Yahoo-Lodge": { name: "Yahoo Lodge", content: "yahoo lodge component" }
    },
    index: "meetup index"
  },
  javascript: {
    path: "javascript",
    title: "js nav",
    topics: {
      "python-and-javascript": {
        name: "Python and JavaScript",
        content: "python and js component"
      },
      "django-and-react": {
        name: "Django and React",
        content: "django and react component"
      }
    },
    index: "javascript index"
  }
};

export default pageData;
