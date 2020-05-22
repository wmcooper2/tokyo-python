### Notes

The core of this website is the "src/data.js" file. From it, the content on the page is changed from the links to the components that are rendered on the pages. The paths for the routing are also included in it.

The site is dynamically generated from that document, and the content for each page is kept in a JSX component in "src/pages/somepagecomponent.jsx".

- Adding Navigation Links:

  1. Open "src/data.js".
  2. Add new MAIN TOPIC.
  3. Add "Route" to main "App" component
  4. "MainComponent" component dynamically generates the topic in the topic list and the Route for the topic's content.

- Adding a MAIN TOPIC:

  1. Text, headers and components' data on the page start with "src/data.js"
  2. "src/data.js" format is this:

  ```
      navbar main topic: {
        path: str,
        nav-link: str,
        topics: {
          topic key: {
            topic name: str,
            topic page content: <Component />
            },
          topic index page: <Component />
        }
      }
  ```

  3. Example:

  ```
    home: {
      path: "home",
      "nav-link": "Home",
      topics: {
        "about-us": {
          name: "About",
          content: <About />
          },
        "contact-us": {
          name: "Contact",
          content: "contact us component"
          }
      },
      index: <HomeIndex />
    },
  ```

  4. Explanation:

  - "topics";
  - "topic key"; this object's keys will become the text of the links that appear in the topic's list of sub-topics

  ```
      navbar main topic: {          //this key becomes the text of the link in the nav bar
        URL end point:              //main topic endpoint
        title:                      //not used
        topics: {
          topic key: {              //sub-topic endpoint
            topic name:             //sub-topic link text
            topic page content:     //sub-topic <Component /> (the page's data)
            },
          topic index page:         //main topic <Component /> (the main topic's index page)
        }
      }
  ```
