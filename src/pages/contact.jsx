import React from "react";

const EmailForm = () => {
  return (
    <form
      action="https://wmcooper2.com/tokyo-python/send"
      method="post"
      enctype="application/x-www-form-urlencoded"
      // enctype="text/plain"
    >
      <input
        type="text"
        id="name"
        name="sendersName"
        placeholder="Name"
        required
      />
      <input
        type="email"
        id="email"
        name="sendersEmail"
        placeholder="email"
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message... (1000 characters max)"
        maxLength={1000}
        wrap="hard"
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

const ContactPage = props => {
  return (
    <div className="contact topic-page">
      <h1>Contact Page</h1>
      <p>
        Add something that spambots can't automatically input so that I know
        you're not a robot spamming me. Captchas?
      </p>
      <EmailForm />
    </div>
  );
};

export default ContactPage;
