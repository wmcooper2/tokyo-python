import React from "react";
import HomeIndex from "./pages/homeindex";
import RegexIndex from "./pages/regexindex";
import MeetupIndex from "./pages/meetupindex";
import Comparisons from "./pages/comparisonsindex";
import About from "./pages/about";
import SpecialSequences from "./pages/specialsequences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faYahoo,
  faPython,
  faJsSquare,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faAddressCard,
  faChalkboardTeacher,
  faBalanceScale,
  faDiceTwo,
  faDiceThree,
  faPlusSquare,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} size="2x" />;
const meetupIcon = <FontAwesomeIcon icon={faMeetup} size="2x" />;
const yahooIcon = <FontAwesomeIcon icon={faYahoo} size="2x" />;
const contactIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const aboutIcon = <FontAwesomeIcon icon={faAddressCard} size="2x" />;
const howToIcon = <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />;
const comparisonIcon = <FontAwesomeIcon icon={faBalanceScale} size="2x" />;
// const pythonIcon = <FontAwesomeIcon icon={faPython} size="2x" />;
const python2Icon = <FontAwesomeIcon icon={faDiceTwo} size="2x" />;
const python3Icon = <FontAwesomeIcon icon={faDiceThree} size="2x" />;
const javaScriptIcon = <FontAwesomeIcon icon={faJsSquare} size="2x" />;
const reactIcon = <FontAwesomeIcon icon={faReact} size="2x" />;
const plusIcon = <FontAwesomeIcon icon={faPlusSquare} size="2x" />;
const regexIcon = <FontAwesomeIcon icon={faTerminal} size="2x" />;

//index is the home page for that topic, not the home page for the site
const pageData = {
  home: {
    path: "home",
    "nav-link": homeIcon,
    topics: {
      "about-us": { name: aboutIcon, content: <About /> },
      "contact-us": {
        name: contactIcon,
        content: "contact us component"
      }
    },
    index: <HomeIndex />
  },

  regex: {
    path: "regex",
    "nav-link": regexIcon,
    topics: {
      "how-to": { name: howToIcon, content: "how to component" },
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
    "nav-link": meetupIcon,
    topics: {
      TPSC: { name: "Tokyo Python Society Club", content: "tpsc component" },
      "Yahoo-Lodge": {
        name: "Yahoo Lodge",
        content: "yahoo lodge component",
        icon: yahooIcon
      }
    },
    index: <MeetupIndex />
  },

  comparisons: {
    path: "comparisons",
    "nav-link": comparisonIcon,
    topics: {
      "python-and-javascript": {
        name: javaScriptIcon,
        content: "python and javascript component"
      },
      react: {
        name: reactIcon,
        content: "django and react component"
      },
      "python-2-and-3": {
        name: (
          <div>
            {python2Icon}
            {plusIcon}
            {python3Icon}
          </div>
        ),
        content: "Python 2 and 3 comparison component"
      }
    },
    index: <Comparisons />
  }
};

export default pageData;
