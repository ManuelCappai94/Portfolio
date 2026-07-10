import pc from "../../../images/pc.png";
import "../../../styles/about.css";

const AboutContent = () => {
  return (
    <article
      className="about-article"
      aria-labelledby="about-content-title"
    >
      <header className="about-header">
        <h2 id="about-content-title" className="about-title">
          Beyond the code
        </h2>

        <p className="about-introduction">
          What I build, how I work, and what keeps me learning.
        </p>
      </header>

      <div className="about-intro-layout">
        <picture className="about-image-container">
          <img
            className="about-image"
            src={pc}
            alt="Illustration of a developer working at a computer"
          />
        </picture>

        <p className="about-lead">
          I'm Manuel Cappai, a Frontend Developer from Sardinia, Italy.
          I enjoy turning ideas into responsive web applications that feel
          clear, reliable, and straightforward to use.
        </p>
      </div>

      <div className="about-story">
        <section
          className="about-story-section"
          aria-labelledby="about-beginning-title"
        >
          <header className="about-story-heading">
            <p className="about-story-label">01 · The beginning</p>

            <h3 id="about-beginning-title">
              From curiosity to JavaScript
            </h3>
          </header>

          <p>
            I began by studying HTML and CSS more deeply through dedicated
            courses, but discovering JavaScript changed the way I saw the
            web. After completing a structured course on the language, I
            started building projects and applying what I had learned to
            increasingly complex interfaces and application logic.
          </p>
        </section>

        <section
          className="about-story-section"
          aria-labelledby="about-architecture-title"
        >
          <header className="about-story-heading">
            <p className="about-story-label">02 · How I build</p>

            <h3 id="about-architecture-title">
              Learning to build with structure
            </h3>
          </header>

          <p>
            Working on real applications pushed me to refine the way I write
            code: separating responsibilities, organising data and logic,
            and creating structures that are easier to understand and
            maintain. TypeScript strengthened my understanding of type
            safety and data consistency, while React and Next.js helped me
            think more clearly about components, data flow, and scalable
            application architecture.
          </p>
        </section>

        <section
          className="about-story-section"
          aria-labelledby="about-growth-title"
        >
          <header className="about-story-heading">
            <p className="about-story-label">03 · Professional growth</p>

            <h3 id="about-growth-title">
              Projects, teamwork, and real workflows
            </h3>
          </header>

          <p>
            Most of my growth has come from building projects, revisiting
            weak decisions, debugging what did not work, and improving
            existing code over time. My international internship at IDEA
            strengthened my communication, adaptability, and confidence in
            a professional environment. Later, the Mayerfeld frontend
            practicum gave me hands-on experience with team coordination,
            shared Git workflows, code reviews, semantic HTML,
            accessibility, and security-minded implementation choices.
          </p>
        </section>

        <section
          className="about-story-section"
          aria-labelledby="about-systems-title"
        >
          <header className="about-story-heading">
            <p className="about-story-label">04 · Under the hood</p>

            <h3 id="about-systems-title">
              Understanding how systems work
            </h3>
          </header>

          <p>
            I also spend time exploring software and game architecture,
            including how classic engines such as Doom divide
            responsibilities and keep complex systems efficient. That
            curiosity influences the way I approach my own projects: every
            component should have a clear purpose, communicate cleanly with
            the rest of the system, and avoid taking on responsibilities
            that belong elsewhere.
          </p>
        </section>
      </div>

      <footer className="about-closing">
        <p>
          I want to keep taking on harder problems, building better systems,
          and turning this path into the work I do every day.
        </p>
      </footer>
    </article>
  );
};

export default AboutContent;
