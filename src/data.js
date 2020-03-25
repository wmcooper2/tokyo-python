import React from "react";
import HomeIndex from "./pages/homeindex";
import RegexIndex from "./pages/regexindex";
import MeetupIndex from "./pages/meetupindex";
import Comparisons from "./pages/comparisonsindex";
import About from "./pages/about";
import SpecialSequences from "./pages/specialsequences";

//index is the home page for that topic, not the home page for the site
const pageData = {
  home: {
    path: "home",
    "nav-link": "Home",
    topics: {
      "about-us": { name: "About", content: <About /> },
      "contact-us": { name: "Contact", content: "contact us component" }
    },
    index: <HomeIndex />
  },

  regex: {
    path: "regex",
    "nav-link": "Regex",
    topics: {
      "how-to": { name: "How to", content: "how to component" },
      explanation: { name: "The basics", content: "basics component" },
      "special-sequences": {
        name: "Special Sequences",
        content: <SpecialSequences />
      },
      examples: { name: "Examples", content: "examples component" }
    },
    index: <RegexIndex />
  },

  meetup: {
    path: "meetup",
    "nav-link": "Meetup",
    topics: {
      TPSC: { name: "Tokyo Python Society Club", content: "tpsc component" },
      "Yahoo-Lodge": { name: "Yahoo Lodge", content: "yahoo lodge component" }
    },
    index: <MeetupIndex />
  },

  comparisons: {
    path: "comparisons",
    "nav-link": "Comparisons",
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
    index: <Comparisons />
  }
};

export default pageData;
