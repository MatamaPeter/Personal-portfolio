import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [buttonText, setButtonText] = useState("Submit");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    setIsSending(true);
    setSent(false);
    setButtonText("");

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setTimeout(() => {
          setSent(false);
          setButtonText("Submit");
        }, 3000); // Reset after 3s
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setButtonText("Submit");
      })
      .finally(() => setIsSending(false));
  }

  return (
    <>
      <div className="contact-container">
        <h1>Contact me for Collaboration</h1>
        <p>
          Reach out today to discuss your project needs and start collaborating on something amazing.
        </p>
      </div>

      <div className="contact-info">
        <div className="email">
          <i className="material-icons">email</i>
          <a href="mailto:peter24matama@gmail.com">peter24matama@gmail.com</a>
        </div>
        <div className="phone">
          <i className="material-icons">phone</i>
          <a href="tel:+254793517987">+254 793 517 987</a>
        </div>
      </div>

      <form className="contact-form" action={handleSubmit}>
        <div className="name-email-field">
          <div className="name-field">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Peter Matama"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
            />
          </div>
          <div className="message-field">
            <label htmlFor="email">Email</label>
            <input
              placeholder="peter24matama@gmail.com"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="message-field">
          <textarea
            name="message"
            id="message"
            placeholder="Type your message..."
            required
          ></textarea>
        </div>
        <div className="btn-submit">
            <button
                type="submit"
                disabled={isSending || sent}
            >
                {isSending ? <span className="loader"></span> : sent ? <div className="sent-text"><div className="checkmark">✔</div>Sent</div> : buttonText}
            </button>
        </div>
      </form>

    </>
  );
}

export default Contact;
