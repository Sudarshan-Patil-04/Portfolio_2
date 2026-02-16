import { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Web Developer",
  "Problem Solver",
  "Creative Thinker",
  "Software Engineer"
];

const typingSpeed = 80;
const deletingSpeed = 40;
const delayBetween = 1500;

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="hero-section">
      
      {/* Premium Profile Wrapper */}
      <div className="profile-wrapper">
        <img src="sid.jpg" alt="Sudarshan Patil" />
        <div className="profile-glow"></div>
      </div>

      <p className="subtitle1">Available for hire</p>

      <div className="me">
        <h1>
          Hi, I'm <span>Sudarshan Patil</span>
        </h1>

        <div className="typed-role">
          <span className="role-prefix">I'm a </span>
          {displayedText}
          <span className="cursor"></span>
        </div>

        <p className="subtitle2">
          Creative Web & Software Developer building engaging,
          scalable solutions with HTML, CSS, JavaScript, Java & Python.
        </p>

        <div className="buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>
          <a href="mailto:sudarshanpatil7599@gmail.com" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/sudarshan-patil-5581aa292"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Sudarshan-Patil-04"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.codechef.com/users/rcp_231106004"
            aria-label="CodeChef"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
