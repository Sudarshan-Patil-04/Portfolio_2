import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava,FaNode, FaGithub } from 'react-icons/fa';

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Python", icon: <FaPython />, color: "#306998" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Node.js", icon: <FaNode />, color: "#2af1af" },
  { name: "GitHub", icon: <FaGithub />, color: "#14120f" },
];

const Skills = () => {
  return (
    <div className="container py-5 skills-section">
        <section  id="skills">
     <h2 className="text-center mb-4">My Skills</h2>
      <p className="text-center mb-5">These are the core technologies I use to build fast, clean, and scalable web applications.</p>
      <div className="row justify-content-center g-4">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-4 col-lg-2 text-center" key={index}>
            <div className="skill-card" style={{ color: skill.color }}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
        </section>
    </div>
  );
};

export default Skills;
