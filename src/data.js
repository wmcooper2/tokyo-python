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
  // faPython,
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
  // faPlusSquare,
  faTerminal,
  faHandshake,
  faTools,
  faFileWord,
  faPalette
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
// const plusIcon = <FontAwesomeIcon icon={faPlusSquare} size="2x" />;
const regexIcon = <FontAwesomeIcon icon={faTerminal} size="2x" />;
const tpscIcon = <FontAwesomeIcon icon={faHandshake} size="2x" />;
const basicsIcon = <FontAwesomeIcon icon={faTools} size="2x" />;
const specialSequencesIcon = <FontAwesomeIcon icon={faFileWord} size="2x" />;
const examplesIcon = <FontAwesomeIcon icon={faPalette} size="2x" />;

//index is the home page for that topic, not the home page for the site
const pageData = {
  home: {
    path: "home",
    "nav-link": homeIcon,
    topics: {
      "about-us": { name: "about", content: <About />, icon: aboutIcon },
      "contact-us": {
        name: "contact",
        content: "contact us component",
        icon: contactIcon
      }
    },
    index: <HomeIndex />
  },

  regex: {
    path: "regex",
    "nav-link": regexIcon,
    topics: {
      "how-to": {
        name: "how to",
        content: "how to component",
        icon: howToIcon
      },
      explanation: {
        name: "basics",
        content: "basics component",
        icon: basicsIcon
      },
      "special-sequences": {
        name: "special sequences",
        content: <SpecialSequences />,
        icon: specialSequencesIcon
      },
      examples: {
        name: "examples",
        content: "examples component",
        icon: examplesIcon
      }
    },
    index: <RegexIndex />
  },

  meetup: {
    path: "meetup",
    "nav-link": meetupIcon,
    topics: {
      TPSC: {
        name: "TPSC",
        content: "Tokyo Python Society Club component",
        icon: tpscIcon
      },
      "Yahoo-Lodge": {
        name: "yahoo lodge",
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
        name: "javascript",
        content: "python and javascript component",
        icon: javaScriptIcon
      },
      react: {
        name: "react.js",
        content: "django and react component",
        icon: reactIcon
      },
      "python-2-and-3": {
        name: "2 vs 3",
        content: "Python 2 and 3 comparison component",
        icon: (
          <div>
            {python2Icon}
            {python3Icon}
          </div>
        )
      }
    },
    index: <Comparisons />
  }
};

export default pageData;
