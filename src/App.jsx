import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    no: "01",
    title: "Avanthi Alumni Portal",
    type: "FULL-STACK • ONGOING",
    description:
      "A centralized alumni platform connecting students, alumni, teachers and administrators through profiles, networking, jobs, events, mentorship and community features.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    featured: true,
  },
  {
    no: "02",
    title: "MusicVerse",
    type: "WEB DEVELOPMENT • LIVE",
    description:
      "A Telugu and Tollywood music discovery platform for exploring artists, songs, movies, favourites and upcoming events.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://naga-poojitha.github.io/MusicVerse/",
  },
  {
    no: "03",
    title: "HirevAI",
    type: "GENERATIVE AI • APPLICATION",
    description:
      "An AI-powered interview platform created with Lovable.ai featuring resume screening, personalized questions, voice interviews, scoring and candidate reports.",
    tech: ["Lovable.ai", "React", "Gemini AI", "Supabase"],
    link: "https://ai-hiring-1.lovable.app/",
  },
  {
    no: "04",
    title: "Gesture Controlled Game",
    type: "COMPUTER VISION",
    description:
      "A real-time gesture-based game interface using camera input and hand landmark detection.",
    tech: ["Python", "MediaPipe", "OpenCV", "cvzone"],
    link: "https://drive.google.com/file/d/1rfhSwnYoZavC_SHtbS7gFP8JBRpHWSUa/view?pli=1",
  },
  {
    no: "05",
    title: "Real-Time Object Detection",
    type: "COMPUTER VISION",
    description:
      "A real-time object detection system using YOLOv8 with image processing, annotation and camera-based detection.",
    tech: ["Python", "YOLOv8", "OpenCV", "NumPy"],
    link: "https://drive.google.com/file/d/1nphtyQt64CrRlQuN8COJkk3ZfFtoIPd/view",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Node.js",
  "MongoDB",
  "SQL",
  "Machine Learning",
  "Generative AI",
  "Computer Vision",
  "OpenCV",
  "MediaPipe",
  "YOLOv8",
  "Git",
  "GitHub",
];

const achievements = [
  {
    id: "hackathon",
    type: "01 / HACKATHON",
    title: "3rd Prize",
    event: "JNTUGV Level-3 24-Hour Buildathon",
    detail: "₹7,000 • CODEPY",
    image: "/achievements/hackathon.jpg",
    color: "purple-card",
  },
  {
    id: "powerbi",
    type: "02 / HACKATHON",
    title: "Runner-Up",
    event: "Power BI Hackathon",
    detail: "₹1,500",
    image: "/achievements/powerbi.jpg",
    color: "mint-card",
  },
  {
    id: "gyan",
    type: "03 / TECH FEST",
    title: "2nd Prize",
    event: "GYAN 2K24 Tech Fest",
    detail: "Technical Achievement",
    image: "/achievements/gyan.jpg",
    color: "peach-card",
  },
];

function App() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="topbar">
        <a href="#home" className="brand">
          <strong>My Portfolio</strong>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-nav"
        >
          Resume ↗
        </a>
      </header>

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="dot" />
              CSE • AI & ML • Full-Stack
            </div>

            <h1>
              Building ideas
              <br />
              <em>into experiences.</em>
            </h1>

            <p className="hero-copy">
              Hi, I'm <strong>Poojitha</strong> — a Computer Science Engineering
              student specializing in Artificial Intelligence & Machine Learning.
              I enjoy building practical web applications and intelligent
              solutions that solve real problems.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="primary-btn">
                Explore my work <span>↓</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-btn"
              >
                View Resume ↗
              </a>
            </div>

            <div className="hero-meta">
              <span>Visakhapatnam, India</span>
              <span>•</span>
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="hero-right">
                <div className="profile-showcase">
                    <div className="profile-frame-back" />

                    <div className="profile-frame">
                    <img
                        src="/profile.jpg"
                        alt="Gulla Naga Poojitha"
                    />
                    </div>

                    <div className="profile-top-label">
                    <span>01</span>
                    <span>PROFILE</span>
                    </div>

                    <div className="profile-side-label">
                    AI • ML • WEB
                    </div>

                    <div className="profile-bottom-note">
                    <span>BASED IN</span>
                    <strong>VISAKHAPATNAM, INDIA</strong>
                    </div>
                </div>
            </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stats">
            <div>
              <strong>8.71</strong>
              <span>Current CGPA</span>
            </div>

            <div>
              <strong>05+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Internships</span>
            </div>

            <div>
              <strong>03rd</strong>
              <span>Hackathon Prize</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="content-section about" id="about">
          <div className="section-intro">
            <span className="section-no">01</span>
            <span className="section-tag">A LITTLE ABOUT ME</span>
          </div>

          <div className="about-grid">
            <h2>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </h2>

            <div className="about-text">
              <p>
                I'm a B.Tech CSE student at Avanthi Institute of Engineering
                and Technology, specializing in Artificial Intelligence &
                Machine Learning.
              </p>

              <p>
                My interests sit at the intersection of{" "}
                <b>AI, web development and computer vision</b>. I like taking
                an idea, understanding the problem behind it and turning it
                into something people can actually use.
              </p>

              <p>
                From hackathons and internships to full-stack projects, I'm
                continuously learning by building.
              </p>

              <div className="about-links">
                <a
                  href="https://github.com/Naga-Poojitha"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/naga-poojitha-gulla-110038297/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="content-section work" id="work">
          <div className="section-intro">
            <span className="section-no">02</span>
            <span className="section-tag">SELECTED WORK</span>
          </div>

          <div className="work-heading">
            <h2>
              Things I've
              <br />
              <span>built.</span>
            </h2>

            <p>
              A collection of projects across full-stack development,
              generative AI and computer vision.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                className={`project ${
                  project.featured ? "featured" : ""
                }`}
                key={project.no}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <div className="project-no">{project.no}</div>

                <div className="project-main">
                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-row">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Demo <span>↗</span>
                    </a>
                  )}
                </div>

                {/* No second arrow here */}
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="content-section journey" id="experience">
          <div className="section-intro">
            <span className="section-no">03</span>
            <span className="section-tag">MY JOURNEY</span>
          </div>

          <h2>
            Learning through
            <br />
            <span>real experiences.</span>
          </h2>

          <div className="timeline">

            <div className="timeline-item interactive-experience">
              <div className="timeline-date">
                MAY — JUL 2026
              </div>

              <div className="timeline-marker" />

              <div className="timeline-content">
                <span>INTERNSHIP</span>

                <h3>Fullstack with Python Intern</h3>

                <h4>AvaIntern Edutech Pvt. Ltd.</h4>

                <p>
                  Worked on practical full-stack development during a
                  structured internship, strengthening my understanding
                  of web applications and software development workflows.
                </p>
              </div>
            </div>

            <div className="timeline-item interactive-experience">
              <div className="timeline-date">2025</div>

              <div className="timeline-marker" />

              <div className="timeline-content">
                <span>AI & CLOUD INTERNSHIP</span>

                <h3>Crop Recommendation System</h3>

                <h4>
                  IBM SkillsBuild • Edunet Foundation • AICTE
                </h4>

                <p>
                  Built an AI-based crop recommendation solution using
                  machine learning concepts, Kaggle data and IBM Cloud AutoAI.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section className="content-section skills" id="skills">
          <div className="section-intro">
            <span className="section-no">04</span>
            <span className="section-tag">TECHNICAL TOOLKIT</span>
          </div>

          <div className="skills-heading">
            <h2>
              Tools I use to
              <br />
              <span>make things work.</span>
            </h2>
          </div>

          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className="skill-groups">

            <div>
              <small>FRONTEND</small>
              <p>
                HTML • CSS • JavaScript • React
              </p>
            </div>

            <div>
              <small>BACKEND & DATABASE</small>
              <p>
                Python • Node.js • MongoDB • SQL • Supabase
              </p>
            </div>

            <div>
              <small>AI / ML</small>
              <p>
                Machine Learning • Generative AI • Computer Vision
              </p>
            </div>

            <div>
              <small>TOOLS</small>
              <p>
                Git • GitHub • VS Code • Google Colab
              </p>
            </div>

          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section
          className="content-section achievements"
          id="achievements"
        >
          <div className="section-intro">
            <span className="section-no">05</span>
            <span className="section-tag">ACHIEVEMENTS</span>
          </div>

          <h2>
            Small wins.
            <br />
            <span>Big motivation.</span>
          </h2>

          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <button
                key={achievement.id}
                className={`achievement-card ${achievement.color}`}
                onClick={() =>
                  setSelectedAchievement(achievement)
                }
              >
                <span>{achievement.type}</span>

                <strong>{achievement.title}</strong>

                <h3>
                  {achievement.event}
                </h3>

                <p>{achievement.detail}</p>

                <small>
                  View achievement →
                </small>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedAchievement && (
              <motion.div
                className="achievement-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAchievement(null)}
              >
                <motion.div
                  className="achievement-modal"
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  <button
                    className="achievement-close"
                    onClick={() =>
                      setSelectedAchievement(null)
                    }
                  >
                    ×
                  </button>

                  <div className="achievement-modal-image">
                    <img
                      src={selectedAchievement.image}
                      alt={selectedAchievement.event}
                    />
                  </div>

                  <div className="achievement-modal-content">
                    <span>ACHIEVEMENT</span>

                    <h3>
                      {selectedAchievement.title}
                    </h3>

                    <p>
                      {selectedAchievement.event}
                    </p>

                    <strong>
                      {selectedAchievement.detail}
                    </strong>

                    <small>
                      A memorable milestone from my
                      academic and hackathon journey.
                    </small>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <span className="section-tag">
              06 / LET'S CONNECT
            </span>

            <h2>
              Have an opportunity?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p>
              I'm currently looking for opportunities where I can
              learn, contribute and build meaningful technology.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:gullanagapoojitha@gmail.com"
                className="primary-btn"
              >
                gullanagapoojitha@gmail.com ↗
              </a>

              <a
                href="https://www.linkedin.com/in/naga-poojitha-gulla-110038297/"
                target="_blank"
                rel="noreferrer"
                className="outline-btn"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Naga-Poojitha"
                target="_blank"
                rel="noreferrer"
                className="outline-btn"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <span>© 2026 Poojitha</span>
        <span>Built with curiosity & code.</span>
        <a href="#home">Back to top ↑</a>
      </footer>

    </div>
  );
}

export default App;