import React from "react";

const HomePage = () => {
  return (
    <div className="topic-page">
      <h1 className="left-align">Home Page</h1>
      <p>
        This is a wireframe for Tokyo Python Society Club. Just in case anyone
        else reads this... Events/meetups are postponed due to the Coronavirus
        problem. Parts of the site with some functionality/content;
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
        <li>Wireframe the comaprison pages left/right vertical columns</li>
        <li>Add pictures to the TPSC topic</li>
        <li>
          Swap the meetup logo in the navbar with the handshake logo in the
          topic bar.
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
