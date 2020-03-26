import React from "react";
import About from "./pages/about";
import BasicsPage from "./pages/basics";
import ComparisonsPage from "./pages/comparisons";
import ContactPage from "./pages/contact";
import ExamplesPage from "./pages/examples";
import HomePage from "./pages/home";
import HowToPage from "./pages/howto";
import JavascriptPage from "./pages/javascript";
import MeetupPage from "./pages/meetup";
import Python23Page from "./pages/python23";
import ReactPage from "./pages/react";
import RegexPage from "./pages/regex";
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

const homeIcon = <FontAwesomeIcon icon={faHome} size="2x" />;
const meetupIcon = <FontAwesomeIcon icon={faMeetup} size="2x" />;
const yahooIcon = <FontAwesomeIcon icon={faYahoo} size="2x" />;
const contactIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const aboutIcon = <FontAwesomeIcon icon={faAddressCard} size="2x" />;
const howToIcon = <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />;
const comparisonIcon = <FontAwesomeIcon icon={faBalanceScale} size="2x" />;
const pythonIcon = <FontAwesomeIcon icon={faPython} size="2x" />;
// const python2Icon = <FontAwesomeIcon icon={faDiceTwo} size="2x" />;
// const python3Icon = <FontAwesomeIcon icon={faDiceThree} size="2x" />;
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
      "how-to": {
        name: "how",
        page: <HowToPage />,
        icon: howToIcon
      },
      explanation: {
        name: "basics",
        page: <BasicsPage />,
        icon: basicsIcon
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

export default pageData;
