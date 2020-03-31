import React from "react";
import About from "./pages/about";
import BasicsPage from "./pages/basics";
import ComparisonsPage from "./pages/comparisons";
import CompilePage from "./pages/compile";
import ContactPage from "./pages/contact";
import ExamplesPage from "./pages/examples";
import HomePage from "./pages/home";
import HowToPage from "./pages/howto";
import JavascriptPage from "./pages/javascript";
import MatchPage from "./pages/match";
import MeetupPage from "./pages/meetup";
import PatternPage from "./pages/pattern";
import Python23Page from "./pages/python23";
import ReactPage from "./pages/react";
import RegexPage from "./pages/regex";
import RePage from "./pages/re";
import Sequences from "./pages/sequences";
import TPSCPage from "./pages/tpsc";
import YahooLodgePage from "./pages/yahoolodge";
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
  // faDiceTwo,
  // faDiceThree,
  // faPlusSquare,
  faTerminal,
  faHandshake,
  faTools,
  faFileWord,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const meetupIcon = <FontAwesomeIcon icon={faMeetup} />;
const yahooIcon = <FontAwesomeIcon icon={faYahoo} />;
const contactIcon = <FontAwesomeIcon icon={faEnvelope} />;
const aboutIcon = <FontAwesomeIcon icon={faAddressCard} />;
const howToIcon = <FontAwesomeIcon icon={faChalkboardTeacher} />;
const comparisonIcon = <FontAwesomeIcon icon={faBalanceScale} />;
const pythonIcon = <FontAwesomeIcon icon={faPython} />;
// const python2Icon = <FontAwesomeIcon icon={faDiceTwo} />;
// const python3Icon = <FontAwesomeIcon icon={faDiceThree} />;
const javaScriptIcon = <FontAwesomeIcon icon={faJsSquare} />;
const reactIcon = <FontAwesomeIcon icon={faReact} />;
// const plusIcon = <FontAwesomeIcon icon={faPlusSquare} />;
const regexIcon = <FontAwesomeIcon icon={faTerminal} />;
const tpscIcon = <FontAwesomeIcon icon={faHandshake} />;
const basicsIcon = <FontAwesomeIcon icon={faTools} />;
const specialSequencesIcon = <FontAwesomeIcon icon={faFileWord} />;
const examplesIcon = <FontAwesomeIcon icon={faPalette} />;

//index is the home page for that topic, not the home page for the site
const mainData = {
  home: {
    path: "home",
    "nav-link": homeIcon,
    topics: {
      "about-us": {
        name: "about",
        page: <About />,
        icon: aboutIcon
      },
      "contact-us": {
        name: "contact",
        page: <ContactPage />,
        icon: contactIcon
      }
    },
    index: <HomePage />
  },

  regex: {
    path: "regex",
    "nav-link": regexIcon,
    topics: {
      basics: {
        name: "basics",
        page: <BasicsPage />,
        icon: basicsIcon
      },
      "how-to": {
        name: "how",
        page: <HowToPage />,
        icon: howToIcon
      },
      "special-sequences": {
        name: "sequences",
        page: <Sequences />,
        icon: specialSequencesIcon
      },
      examples: {
        name: "examples",
        page: <ExamplesPage />,
        icon: examplesIcon
      },
      re: {
        name: "re",
        page: <RePage />,
        icon: "R"
      },
      compile: {
        name: "compile",
        page: <CompilePage />,
        icon: "C"
      },
      pattern: {
        name: "pattern",
        page: <PatternPage />,
        icon: "P"
      },
      match: {
        name: "match",
        page: <MatchPage />,
        icon: "M"
      }
    },
    index: <RegexPage />
  },

  meetup: {
    path: "meetup",
    "nav-link": meetupIcon,
    topics: {
      TPSC: {
        name: "TPSC",
        page: <TPSCPage />,
        icon: tpscIcon
      },
      "Yahoo-Lodge": {
        name: "lodge",
        page: <YahooLodgePage />,
        icon: yahooIcon
      }
    },
    index: <MeetupPage />
  },

  comparisons: {
    path: "comparisons",
    "nav-link": comparisonIcon,
    topics: {
      "python-and-javascript": {
        name: "javascript",
        page: <JavascriptPage />,
        icon: javaScriptIcon
      },
      react: {
        name: "react.js",
        page: <ReactPage />,
        icon: reactIcon
      },
      "python-2-and-3": {
        name: "2vs3",
        page: <Python23Page />,
        icon: pythonIcon
      }
    },
    index: <ComparisonsPage />
  }
};

export default mainData;
