import React from "react";

const EmailForm = () => {
  return (
    <div>
      <form
        action="/send"
        method="post"
        enctype="application/x-www-form-urlencoded"
      >
        <input
          type="text"
          id="name"
          name="sendersName"
          placeholder="name"
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
          placeholder="message... (1000 characters max)"
          maxLength={1000}
          wrap="hard"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="contact topic-page">
      <h1>Contact</h1>
      <EmailForm />
      <p>
        Add something that spambots can't automatically input so that I know
        you're not a robot spamming me. Captchas?
      </p>
    </div>
  );
};

export default ContactPage;
