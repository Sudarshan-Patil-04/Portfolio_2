import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "NGO Management System",
    description:
      "Manages donors, volunteers, and events using HTML, CSS, JS, PHP, and MySQL.",
    img: "Project1.jpg",
    github: "https://github.com/users/Sudarshan-Patil-04/projects",
  },
  {
    title: "E-Commerce Website",
    description:
      "A shopping app similar to Flipkart, built with modern frontend technologies.",
    img: "Project2.jpg",
    github:
      "https://github.com/users/Sudarshan-Patil-04/projects/1/views/1",
  },
  {
    title: "Medanon",
    description:
      "A mental health chatbot that provides suggestions and guidance using AI.",
    img: "Project3.jpg",
    github:
      "https://github.com/users/Sudarshan-Patil-04/projects/1/views/1",
  },
];

const Projects = () => {
  return (
    <section id="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p className="projects-subtext">
          Here are some of my recent projects — each crafted with a focus on clean code, performance, and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-img-wrapper">
                <img src={project.img} alt={project.title} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon"
                >
                  <FaGithub size={22} />
                </a>
              </div>

              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-btn-wrapper">
          <a
            href="https://github.com/users/Sudarshan-Patil-04/projects/1/views/1"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-btn"
          >
            <FaGithub /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
