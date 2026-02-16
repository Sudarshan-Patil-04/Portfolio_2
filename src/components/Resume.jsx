const Resume = () => {
  const resumeUrl = "Sudarshan_Patil_CV.pdf"; // Replace with your actual PDF URL

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">My Resume</h2>
      <section id="resume">
      <p>View or download my resume to learn more about my experience, education, and skills.</p>

      {/* Embedded Resume Viewer */}
      <div className="embed-responsive text-center" style={{ height: '80vh' }}>
        <iframe
          src={resumeUrl}
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
        ></iframe>
      </div>

      {/* Action Buttons */}
      <div className="text-center mt-4 d-flex justify-content-center gap-3">
        <a href={resumeUrl} download>
          <button className="btn btn-primary">Download Resume</button>
        </a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-secondary">Open in New Tab</button>
        </a>
      </div>
      </section>
    </div>
  );
};

export default Resume;
