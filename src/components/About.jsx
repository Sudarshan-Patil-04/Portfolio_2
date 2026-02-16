import './About.css';

const About = () => {
  return (
    <div className="about-section">
        <section id="about" className="about-section">
        <section className="intro">
        <h2>About</h2>
        <p>Learn more about my journey, experience, and what drives me as a developer.</p>
      </section>

      <section className="about-me">
        <h3>About Me</h3>
        <div className="about-image-text">
          <img src="sid2.jpg" alt="Sidharth Patil" className="about-image"/>
          <p>
            I’m Sudarshan Patil, a Data Science student at RCPIT Shirpur with skills in Java, Python, HTML, CSS, SQL, and JavaScript. I have a strong passion for technology, problem-solving, and continuous learning. I thrive in collaborative environments and believe in approaching challenges with creativity and attention to detail. Always eager to grow professionally and contribute to innovative solutions.
          </p>
        </div>
      </section>

      <section className="education">
        <h3>Education</h3>
        <ul>
          <strong>Degree:</strong> Bachelor's in Computer Science and Engineering (Data Science) <br />
          <strong>Institution:</strong> R.C. Patel Institute of Technology, Shirpur
        </ul>
      </section>

      <section className="approach">
        <h3>My Approach</h3>
        <ul>
          <li>Writing clean, maintainable code</li>
          <li>Creating intuitive user experiences</li>
          <li>Ensuring functionality and elegance in design</li>
        </ul>
      </section>

      <section className="hobbies">
        <p>
          When I'm not coding, you'll find me hiking, reading, or exploring new technologies. I'm always eager to expand my knowledge and refine my skills.
        </p>
        <div className="resume-button">
          <a href="Sudarshan_Patil_CV.pdf" target="_blank" rel="noopener noreferrer">
            <button>View Resume</button>
          </a>
        </div>
      </section>
        </section>
    </div>
  );
};

export default About;
