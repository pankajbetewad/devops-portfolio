import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;