import './Contact.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section">
        <section  id="contact">
        <h2>Get in Touch</h2>
      <div className="contact-info">
        <a href="mailto:sudarshanpatil7599@gmail.com"><FaEnvelope />Email</a>
        <a href="https://linkedin.com/in/sudarshan-patil-5581aa292" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Linkedin Profile</a>
        <a href="https://github.com/Sudarshan-Patil-04" target="_blank" rel="noopener noreferrer"><FaGithub /> Github Profile</a>
      </div>

      <p className="intro-text">I'd love to hear from you! Whether you have a question, project idea, or just want to say hello, feel free to reach out using the form below.</p>

      <form className="contact-form" action="mailto:sudarshanpatil7599@gmail.com" method="POST" encType="text/plain">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <button type="submit">Send Message</button>
      </form>
        </section>
    </div>
  );
};

export default Contact;
