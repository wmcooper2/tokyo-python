import React from "react";

const HomePage = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">Home</h1>
      <p>
        If you find any errors (there will be some), then please email me
        through the "contact" subtopic link on the left. I will fix it.
      </p>
      <p>
        This is a wireframe for Tokyo Python. Just in case anyone else reads
        this... Events/meetups are postponed due to the Coronavirus problem.
        Here are the parts of the site with some functionality/content;
      </p>
      <ul>
        <strong>Regex</strong>
        <ul>
          <li>index</li>
          <li>basics</li>
          <li>how</li>
          <li>sequences</li>
          <li>re</li>
          <li>compile</li>
        </ul>
      </ul>

      <p>Site to do list:</p>
      <ul>
        <li>Add map to meetup page</li>
        <li>
          Add info about Yahoo Lodge on yahoo topic, link to their calendar.
        </li>
        <li>Add examples and descriptions to the regex pages.</li>
        <li>
          Swap the meetup logo in the navbar with the handshake logo in the
          topic bar.
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
